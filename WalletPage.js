function WalletPage({ language }) {
    try {
        const [currentPage, setCurrentPage] = React.useState(1);
        const [assets, setAssets] = React.useState(TOTAL_ASSETS.slice(0, ITEMS_PER_PAGE));

        const loadMore = () => {
            const nextAssets = TOTAL_ASSETS.slice(0, (currentPage + 1) * ITEMS_PER_PAGE);
            setAssets(nextAssets);
            setCurrentPage(currentPage + 1);
        };

        return (
            <div className="wallet-container" data-name="wallet-page">
                <div className="balance-card" data-name="balance-card">
                    <div className="balance-title">{getTranslation(language, 'totalBalance')}</div>
                    <div className="balance-amount">0.26231428 BTC</div>
                    <div className="balance-usd">3,700.96 USD</div>
                    <button className="btn-primary mt-4" data-name="deposit-button">
                        {getTranslation(language, 'deposit')}
                    </button>
                </div>

                <div className="card" data-name="assets-card">
                    <h2 className="text-xl font-bold mb-4">{getTranslation(language, 'assetBalances')}</h2>
                    <table className="assets-table" data-name="assets-table">
                        <thead>
                            <tr>
                                <th>{getTranslation(language, 'asset')}</th>
                                <th>{getTranslation(language, 'symbol')}</th>
                                <th>{getTranslation(language, 'market24h')}</th>
                                <th>{getTranslation(language, 'onOrders')}</th>
                                <th>{getTranslation(language, 'availableBalance')}</th>
                                <th>{getTranslation(language, 'totalBalanceTable')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map((asset, index) => (
                                <AssetRow key={index} asset={asset} />
                            ))}
                        </tbody>
                    </table>
                    {assets.length < TOTAL_ASSETS.length && (
                        <button 
                            className="mt-4 text-center w-full text-blue-600" 
                            onClick={loadMore}
                            data-name="load-more"
                        >
                            {getTranslation(language, 'loadMore')}
                        </button>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('WalletPage component error:', error);
        reportError(error);
        return null;
    }
}
