import { ApiPromise, WsProvider } from '@polkadot/api';
import fs from 'fs';
import path from 'path';

async function main() {
  // Connect to the local node
  const provider = new WsProvider('ws://localhost:9944');
  const api = await ApiPromise.create({ provider });

  console.log('Connected to Polkadot node at localhost:9944');
  console.log(`Chain: ${await api.rpc.system.chain()}`);
  console.log(`Node: ${await api.rpc.system.name()} v${await api.rpc.system.version()}`);
  console.log('');

  // Get chain decimals
  const chainDecimals = api.registry.chainDecimals[0] || 12;
  const divisor = Math.pow(10, chainDecimals);
  console.log(`Using ${chainDecimals} decimals for KPG token`);
  console.log('');

  // Get all accounts with balances
  const entries = await api.query.system.account.entries();
  
  console.log('Accounts with balances:');
  console.log('======================');
  
  let accountCount = 0;
  const csvData = [];
  csvData.push(['Account Number', 'Address', 'Free Balance (KPG)', 'Reserved Balance (KPG)', 'Frozen Balance (KPG)', 'Total Balance (KPG)']);
  
  for (const [key, account] of entries) {
    // Extract the address from the key
    const address = key.args[0].toString();
    
    // Get the account data
    const { data: { free, reserved, frozen } } = account;
    
    // Only show accounts with non-zero balances
    if (!free.isZero() || !reserved.isZero()) {
      accountCount++;
      
      // Convert to KPG
      const freeKPG = Number(free.toString()) / divisor;
      const reservedKPG = Number(reserved.toString()) / divisor;
      const frozenKPG = Number(frozen.toString()) / divisor;
      const totalKPG = freeKPG + reservedKPG;
      
      console.log(`\nAccount #${accountCount}`);
      console.log(`Address: ${address}`);
      console.log(`Free balance: ${freeKPG.toFixed(4)} KPG`);
      console.log(`Reserved balance: ${reservedKPG.toFixed(4)} KPG`);
      console.log(`Frozen balance: ${frozenKPG.toFixed(4)} KPG`);
      console.log(`Total balance: ${totalKPG.toFixed(4)} KPG`);
      
      // Add to CSV data
      csvData.push([
        accountCount,
        address,
        freeKPG.toFixed(4),
        reservedKPG.toFixed(4),
        frozenKPG.toFixed(4),
        totalKPG.toFixed(4)
      ]);
    }
  }
  
  console.log('\n======================');
  console.log(`Total accounts with balances: ${accountCount}`);
  
  // Write CSV file
  const csvContent = csvData.map(row => row.join(',')).join('\n');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const csvFilename = `balances_${timestamp}.csv`;
  
  fs.writeFileSync(csvFilename, csvContent);
  console.log(`\nBalances exported to ${csvFilename}`);
  
  // Disconnect when done
  await api.disconnect();
}

main().catch(console.error);