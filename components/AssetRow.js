function AssetRow({ asset }) {
    try {
        return (
            <tr data-name={`asset-row-${asset.symbol}`}>
                <td className="flex items-center">
                    <i className={`${asset.icon} text-2xl mr-3`}></i>
                    <span>{asset.name}</span>
                </td>
                <td>{asset.symbol}</td>
                <td className={asset.change > 0 ? 'percentage-up' : 'percentage-down'}>
                    {asset.change > 0 ? '↑' : '↓'} {Math.abs(asset.change)}%
                </td>
                <td>${asset.onOrders}</td>
                <td>${asset.market}</td>
                {/* 已移除 asset.total 列 */}
            </tr>
        );
    } catch (error) {
        console.error('AssetRow component error:', error);
        reportError(error);
        return null;
    }
}
