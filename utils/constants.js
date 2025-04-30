const ITEMS_PER_PAGE = 3;
const TOTAL_ASSETS = [
    {
        icon: 'fab fa-bitcoin', name: 'Bitcoin', symbol: 'BTC', change: 2.05,
        onOrdersCount: 1.2345, onOrdersAmount: 500.12,
        availableCount: 0.5678, availableAmount: 250.06
    },
    {
        icon: 'fab fa-ethereum', name: 'Ethereum', symbol: 'ETH', change: -2.05,
        onOrdersCount: 2.3456, onOrdersAmount: 400.08,
        availableCount: 1.2345, availableAmount: 210.07
    },
    {
        icon: 'fas fa-circle', name: 'Binance', symbol: 'BNB', change: 2.05,
        onOrdersCount: 3.4567, onOrdersAmount: 300.03,
        availableCount: 2.3456, availableAmount: 180.05
    },
    // --- 添加更多数据，让 Load More 可以显示 ---
    {
        icon: 'fas fa-circle', name: 'Cardano', symbol: 'ADA', change: 1.25,
        onOrdersCount: 10.123, onOrdersAmount: 15.50,
        availableCount: 50.456, availableAmount: 75.20
    },
    {
        icon: 'fas fa-circle', name: 'Solana', symbol: 'SOL', change: -1.15,
        onOrdersCount: 5.678, onOrdersAmount: 800.00,
        availableCount: 2.123, availableAmount: 300.50
    },
    {
        icon: 'fas fa-circle', name: 'Polkadot', symbol: 'DOT', change: 3.45,
        onOrdersCount: 20.987, onOrdersAmount: 180.75,
        availableCount: 100.123, availableAmount: 900.80
    }
    // --- 你可以按需继续添加 ---
];

// ... FONT_SIZES 等其他常量 ...
