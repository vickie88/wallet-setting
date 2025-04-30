function AssetRow({ asset }) {
    try {
        // 总币数不再需要计算和显示
        // const totalCount = Number(asset.onOrdersCount) + Number(asset.availableCount);

        return (
            <tr data-name={`asset-row-${asset.symbol}`}>
                <td className="flex items-center">
                    <i className={`${asset.icon} text-2xl mr-3`}></i>
                    <span>{asset.name}</span>
                </td>
                <td>{asset.symbol}</td>
                <td
                    className={
                        asset.change > 0 ? 'percentage-up' : 'percentage-down'
                    }
                >
                    {asset.change > 0 ? '↑' : '↓'} {Math.abs(asset.change)}%
                </td>
                <td>{asset.onOrdersCount}</td>
                <td>${asset.onOrdersAmount}</td>
                <td>{asset.availableCount}</td>
                <td>${asset.availableAmount}</td>
                {/* 已移除 totalCount 列 */}
            </tr>
        );
    } catch (error) {
        console.error('AssetRow component error:', error);
        reportError(error);
        return null;
    }
}
