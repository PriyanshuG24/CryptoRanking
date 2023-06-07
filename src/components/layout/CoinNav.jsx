import React from 'react'

function CoinNav({ topic, hour, marketCap, price }) {
    return (
        <tr>
            <th className='py-3 bg-blue-300'></th>
            <th className='py-3 bg-blue-300 px-36'>{topic}</th>
            <th className='py-3 bg-blue-300 px-14'>{price}</th>
            <th className='py-3 bg-blue-300 px-14'>{marketCap}</th>
            <th className='py-3 bg-blue-300 px-36'>{hour}</th>
        </tr>
    )
}

export default CoinNav
