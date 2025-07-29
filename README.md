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
Account #1
Address: vSjig45PJV6urw3HXeqQMERbj6eKPNVkgJ6HTKb7C7P3JigPM
Free balance: 4.9986 KPG
Reserved balance: 0.0000 KPG
Frozen balance: 0.0000 KPG
Total balance: 4.9986 KPG
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