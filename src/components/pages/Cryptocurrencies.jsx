import React, { useContext } from 'react'
import { useState } from 'react'
import Currency from './Currency';
import ReactPaginate from 'react-paginate';
import CryptoCoinContext from '../../context/crypto/CryptoCoinContext';
import CoinNav from '../layout/CoinNav';
import Spinner from '../../utility/Spinner';
function Cryptocurrencies() {
    const { coins, loading } = useContext(CryptoCoinContext)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 25;
    const totalPages = Math.ceil(coins.length / itemsPerPage);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const renderData = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = coins.slice(startIndex, endIndex);
        if (loading) {
            return <div>Loading...</div>;
        } 
        return (
            <>
                <div className="flex justify-center items-center ">
                    <table className=' font-[Poppins]  border-3 border-blue-500 w-full overflow-hidden'>
                        <thead className='text-black text-lg'>
                            <CoinNav topic='All Coins' price='price' marketCap='Market Cap' hour='24h' />
                        </thead>
                        <tbody className='text-center'>
                            {slicedData.map((coin) => {
                                return <Currency key={coin.uuid} uuid={coin.uuid} price={coin.price} rank={coin.rank} marketCap={coin.marketCap} name={coin.name} symbol={coin.symbol} change={coin.change} imgUrl={coin.iconUrl} coinrankingUrl={coin.coinrankingUrl} sparkline={coin.sparkline} />
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )

    };
    return loading ? <Spinner/> : (
        <>
            <div className='border-2 py-20 h-96'>
                <div className='mx-40 mb-60'>
                    <h1 className='text-4xl font-bold'>Cryptocurrency price list</h1>
                    <p className='text-lg my-4  font-semibold'>All cryptocurrencies ranked by market cap.</p>
                    <div >
                        <div className="flex w-8/12 ">
                            <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                                <div className='flex'>
                                    <div>Market cap</div>
                                    <div className="tooltip" data-tip="Compared to 24 hours ago, 54% of All coins now have a higher price (gainers) and 46% have a lower price (losers).">
                                        <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                                    </div>
                                </div>
                                <div className='text-lg font-bold'>$ 93.27 trillion</div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                                <div className='flex justify-evenly'>
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
                                <div className='flex justify-evenly'>
                                    <div >Trading volume</div>
                                    <div className="tooltip ml-2" data-tip="The 24 hour trading volume of All coins combined is ₹ 1.64 trillion.">
                                        <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                                    </div>
                                </div>
                                <div className='text-lg font-bold'>$ 2.92 trillion</div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                                <div className='flex justify-evenly'>
                                    <div>BTC dominance</div>
                                    <div className="tooltip ml-2" data-tip="The market cap of BTC makes up 45.5% of the market cap of All coins.">
                                        <button className="w-5 h-5  text-sm font-bold rounded-full bg-gray-200">i</button>
                                    </div>
                                </div>
                                <div className='text-lg font-bold'>45.3%</div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 flex-grow card  rounded-box font-semibold justify-start">
                                <div className='flex  justify-evenly'>
                                    <div>All coins</div>

                                </div>
                                <div className='text-lg font-bold'>100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-4" > {renderData()}</div >
            <div className='my-5'>
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="|"
                    pageCount={totalPages}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="flex justify-center mt-4"
                    activeClassName="text-white font-bold bg-blue-500"
                    pageClassName="btn btn-ghost text-lg text-semibold cursor-pointer mx-2 "
                    previousClassName=" btn btn-ghost text-lg text-semibold  cursor-pointer mx-2"
                    nextClassName="btn btn-ghost text-lg text-semibold cursor-pointer mx-2"
                    breakClassName="mx-2"
                />
            </div>

        </>
    )
}

export default Cryptocurrencies
