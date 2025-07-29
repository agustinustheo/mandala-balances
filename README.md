# Mandala Balances

A JavaScript tool to query and export account balances from a Polkadot blockchain node (Mandala).

## Features

- Connects to a local Polkadot node via WebSocket
- Retrieves all accounts with non-zero balances
- Converts raw balance values to human-readable KPG tokens
- Displays account information in the console
- Exports data to a timestamped CSV file

## Prerequisites

- Node.js (v14 or higher)
- pnpm package manager
- A running Polkadot node accessible at `ws://localhost:9944`

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd mandala-balances
pnpm install
```

## Usage

Run the script to query balances and generate a CSV file:

```bash
pnpm start
```

The script will:
1. Connect to your local Polkadot node at `ws://localhost:9944`
2. Display chain information (name, version)
3. Retrieve all accounts with balances
4. Show each account's:
   - Address
   - Free balance (in KPG)
   - Reserved balance (in KPG)
   - Frozen balance (in KPG)
   - Total balance (in KPG)
5. Export the data to a CSV file with timestamp (e.g., `balances_2025-07-29T12-30-45.csv`)

## Output Format

### Console Output
```
Connected to Polkadot node at localhost:9944  
Chain: Mandala  
Node: Mandala Collator v0.1.0-a1b2c3d4e5f6  

Using 18 decimals for KPG token

Accounts with balances:
======================

Account #1  
Address: vSkN9VXrYc72WqEfsP5dLpU2zQnxZoHgVMyFfRG5v4eMY6k1A  
Free balance: 12.3489 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 12.3489 KPG  

Account #2  
Address: vSd7u6RBLZY8coAeTzqTMiWWt5xfWVKzXJxzZFDLwaU3tyNuW  
Free balance: 987.6543 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 987.6543 KPG  

Account #3  
Address: vSxRPVDWbVqFfA9Mgx7bXBc2AfUZCWPLpy8dQKm5kWkWRzFcb  
Free balance: 65.4321 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 65.4321 KPG  

Account #4  
Address: vSwBg3RpYhzTfDUa8NhQphDFaXZCAhVmESLG9jepdQ8MLXnYo  
Free balance: 120.0000 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 120.0000 KPG  

Account #5  
Address: vSmbc1Ehy3LT4u5f9BqzUyq1tRBYNThRCKMBNhdK9JkjHVkGc  
Free balance: 44.4444 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 44.4444 KPG  

Account #6  
Address: vSkxPUFv8WKTnn8eG6zA7mv5JcBPurQXy2YAjwZYpHUEXZyfc  
Free balance: 2000.0000 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 2000.0000 KPG  

Account #7  
Address: vSyvDqLYA57HZhfcRxMCAMCHFYqHXkmfFwhv9nSftt6qRTPMN  
Free balance: 73.0001 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 73.0001 KPG  

Account #8  
Address: vSjKUTPzEHfDYc3dWh84Q1oCyUPB5sSABe1u4HtVjcsZ5E8Em  
Free balance: 8.8888 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 8.8888 KPG  

Account #9  
Address: vSpLDqfj1XLACXvh3kpFy5MySKoahwJDwCz5rPgP7mxm3nRJV  
Free balance: 999999.9999 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 999999.9999 KPG  

Account #10  
Address: vSopKJeRZzmt2GcpacE7jvXdburYz8rCQXruM4L3UEuPhzccX  
Free balance: 29.0000 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 29.0000 KPG  

Account #11  
Address: vSazF8XTvx9FkxpKGfBuM4Uu2KY9EUVaVnxmmXjM4XnWpqFch  
Free balance: 101.1010 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 101.1010 KPG  

Account #12  
Address: vSdf2RA5gqynrWKPQ4nFzH5g9vgtPwJshP1ZAvWTcKqkPh97N  
Free balance: 6.2831 KPG  
Reserved balance: 0.0000 KPG  
Frozen balance: 0.0000 KPG  
Total balance: 6.2831 KPG  

======================  
Total accounts with balances: 12
```

### CSV Output
The CSV file contains the following columns:
- Account Number
- Address
- Free Balance (KPG)
- Reserved Balance (KPG)
- Frozen Balance (KPG)
- Total Balance (KPG)

## Configuration

The script automatically detects the chain's decimal places for proper token conversion. By default, it uses 12 decimals if not specified by the chain.

To connect to a different node, modify the WebSocket URL in `query-balances.js`:

```javascript
const provider = new WsProvider('ws://your-node-address:port');
```

## Dependencies

- `@polkadot/api` - Polkadot JavaScript API for blockchain interaction

## License

[Your License Here]

## Contributing

[Your Contributing Guidelines Here]