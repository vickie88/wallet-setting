const translations = {
    en: {
        // --- Sidebar & General ---
        realTimeMarket: 'Real-time Market',
        historicalMarket: 'Historical Market',
        tradeBacktest: 'Trade Backtest',
        wallets: 'Wallets',
        activities: 'Activities',
        settings: 'Settings',
        search: 'Search',
        loadMore: 'Load More',

        // --- Settings Page ---
        accountSettings: 'Account Settings',
        assetSettings: 'Asset Settings',
        interfacePreferences: 'Interface Preferences',
        notificationSettings: 'Notification Settings',
        securitySettings: 'Security Settings',
        username: 'Username',
        userID: 'UserID',
        email: 'Email',
        balance: 'Balance', // Note: This key might be generic, check usage
        joinDate: 'Join Date',
        assetUnit: 'Asset Unit',
        decimalPrecision: 'Decimal Precision',
        colorMode: 'Color Mode',
        fontSize: 'Font Size',
        language: 'Language',
        notificationMethod: 'Notification Method',
        priceAlert: 'Price Alert',
        orderFilledNotification: 'Order Filled Notification',
        password: 'Password',
        tradingPIN: 'Trading PIN',
        changes: 'Changes',
        logOut: 'Log Out',
        darkMode: 'Dark Mode',
        small: 'Small', // Font size options likely need medium/large too
        open: 'Open',
        redPoint: 'Red Point',

        // --- Wallet Page ---
        totalBalance: 'Total Balance', // For the top card title
        deposit: 'Deposit',
        assetBalances: 'Asset Balances', // For the table card title
        asset: 'Asset',
        symbol: 'Symbol',
        market24h: '24H MARKET',
        // New table header keys
        onOrdersCount: 'On Orders Count',
        onOrdersAmount: 'On Orders Amount',
        availableCount: 'Available Count',
        availableAmount: 'Available Amount',
        // Removed keys: onOrders, availableBalance, totalBalanceTable

    },
    zh: {
        // --- 侧边栏 & 通用 ---
        realTimeMarket: '实时行情',
        historicalMarket: '历史行情',
        tradeBacktest: '交易回测',
        wallets: '钱包',
        activities: '活动',
        settings: '设置',
        search: '搜索',
        loadMore: '加载更多',

        // --- 设置页 ---
        accountSettings: '账户设置',
        assetSettings: '资产设置',
        interfacePreferences: '界面偏好',
        notificationSettings: '通知设置',
        securitySettings: '安全设置',
        username: '用户名',
        userID: '用户ID',
        email: '邮箱',
        balance: '余额', // 注意: 这个 key 可能比较通用，检查具体用途
        joinDate: '注册日期',
        assetUnit: '资产单位',
        decimalPrecision: '小数精度',
        colorMode: '颜色模式',
        fontSize: '字体大小',
        language: '语言',
        notificationMethod: '通知方式',
        priceAlert: '价格提醒',
        orderFilledNotification: '订单成交通知',
        password: '密码',
        tradingPIN: '交易密码',
        changes: '修改',
        logOut: '退出登录',
        darkMode: '深色模式',
        small: '小', // 字体大小选项可能也需要中/大
        open: '开启',
        redPoint: '红点',

        // --- 钱包页 ---
        totalBalance: '总余额', // 用于顶部卡片标题
        deposit: '充值',
        assetBalances: '资产余额', // 用于表格卡片标题
        asset: '资产',
        symbol: '符号',
        market24h: '24小时行情',
        // 新增表格头 key
        onOrdersCount: '委托中数量',
        onOrdersAmount: '委托中金额',
        availableCount: '可用数量',
        availableAmount: '可用金额',
        // 已移除 key: onOrders, availableBalance, totalBalanceTable
    }
};

// Helper function remains the same
function getTranslation(lang, key) {
    return translations[lang]?.[key] || translations['en'][key] || key;
}
