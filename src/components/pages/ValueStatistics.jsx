import React from 'react'

function ValueStatistics({ details }) {
  const { allTimeHigh, marketCap, rank, fullyDilutedMarketCap, btcPrice, numberOfExchanges, numberOfMarkets,symbol } = details
  const roundToMillion = (value) => {
    return ((value / 1000000).toFixed(2))*80;
}
  return (
    <>
      <div className='flex-col space-y-5 ml-2'>
        <h1 className='text-4xl font-bold'>Value statistics</h1>
        <p className='text-lg font-semibold text-gray-600'>An overview showing the statistics of Dogecoin, such as the base and quote currency, the rank, and trading volume.</p>
      </div>
      <div className=' rounded-2xl'>
        <div className="px-5 py-5">
          <div className="flex flex-col mt-10 space-y-5">
            <div className="flex justify-between">
              <div className='text-lg font-normal'>Coin Rank</div>
              <div className='text-lg font-bold'>{rank}</div>
            </div>
            {/* <div className="flex  justify-between">
              <div >Price to INR</div>
              <div>{btcPrice}</div>
            </div>  */}
            <div className="flex  justify-between">
              <div className='text-lg font-normal' >Price to {symbol}</div>
              <div className='text-lg font-bold'>{btcPrice} {symbol}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-lg font-normal'>Market Cap</div>
              <div className='text-lg font-bold'>&#x20B9;{roundToMillion(marketCap)}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-lg font-normal'>No of Exhanges</div>
              <div className='text-lg font-bold'>{numberOfExchanges}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-lg font-normal'>No of Market </div>
              <div className='text-lg font-bold'>{numberOfMarkets}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-lg font-normal'>Fully diluted market cap</div>
              <div className='text-lg font-bold'>&#x20B9;{roundToMillion(fullyDilutedMarketCap)}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-lg font-normal'>All-time high</div>
              {allTimeHigh && (
                <div className='text-lg font-bold'>{roundToMillion(allTimeHigh.price)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ValueStatistics
