import React, { useContext } from 'react'
import CryptoCoinContext from '../../context/crypto/CryptoCoinContext'
import FavCoinCurrency from './FavCoinCurrency'
import CoinNav from '../layout/CoinNav'
import { Link } from 'react-router-dom'
import logo from '../layout/images.png'
function FavCoin() {
  const { favCoinList } = useContext(CryptoCoinContext)
  return (
    <div>
      <div className='h-96 py-20'>
        <div className='mx-40 mb-60'>
          <h1 className='text-4xl font-bold'>Your favorite coins</h1>
          <p className='text-lg my-4 font-normal'>View your favorite coins, ranked by market cap.</p>
          <div >
            <div className="flex w-12/12 ">
              <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                <div className='flex flex-row justify-evenly'>
                  <div>Market cap</div>
                  <div className="tooltip ml-2" data-tip="Compared to 24 hours ago, 54% of All coins now have a higher price (gainers) and 46% have a lower price (losers).">
                    <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                  </div>
                </div>
                <div className='text-lg font-bold'>$ 93.27 trillion</div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                <div className='flex flex-row justify-evenly'>
                  <div>Gainers vs Losers</div>
                  <div className="tooltip ml-2" data-tip="Compared to 24 hours ago, 54% of All coins now have a higher price (gainers) and 46% have a lower price (losers).">
                    <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                <div className='flex flex-row justify-evenly'>
                  <div >Trading volume</div>
                  <div className="tooltip ml-2" data-tip="The 24 hour trading volume of All coins combined is ₹ 1.64 trillion.">
                    <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                  </div>
                </div>
                <div className='text-lg font-bold'>$ 2.92 trillion</div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                <div className='flex flex-row justify-evenly'>
                  <div>BTC dominance</div>
                  <div className="tooltip ml-2" data-tip="The market cap of BTC makes up 45.5% of the market cap of All coins.">
                    <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                  </div>
                </div>
                <div className='text-lg font-bold'>45.3%</div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                <div className='flex flex-row justify-evenly'>
                  <div>Favcoins coins</div>
                  <div className="tooltip ml-2" data-tip="hello">
                    <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                  </div>
                </div>
                <div className='text-lg font-bold'>{favCoinList.length}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {favCoinList.length !== 0 ? (
        <div className="grid gap-4" >
          <div className="flex justify-center items-center ">
            <table className='shadow-2xl font-[Poppins]  border-3 border-blue-500 w-full overflow-hidden'>
              <thead className='text-black text-lg'>
                <CoinNav topic='Favourite Coins' price='price' marketCap='Market Cap' hour='24h'  />
              </thead>
              <tbody className='text-center'>
                {favCoinList.map((coin) => {
                  return <FavCoinCurrency key={coin.uuid} uuid={coin.uuid} price={coin.price} rank={coin.rank} marketCap={coin.marketCap} name={coin.name} symbol={coin.symbol} change={coin.change} imgUrl={coin.imgUrl} sparkline={coin.sparkline} />
                })}
              </tbody>
            </table>
          </div>
        </div >
      ) : <div className=' flex flex-col items-center'>
        <div className='w-20 h-20'><img src={logo} alt="logo"/></div>
        <div><h1 className='text-2xl font-bold mb-2'>No Favourite</h1></div>
        <div><p className='text-normal font-semibold mb-2'>Add coins to your favorites by clicking their heart icons.</p></div>
        <div><Link to='/'>
          <button className="btn w-60 h-2 border-blue-400 bg-blue-100  hover:bg-blue-200 text-gray-800 font-bold">Go to all coins</button></Link></div>
      </div>}
    </div >
  )
}

export default FavCoin