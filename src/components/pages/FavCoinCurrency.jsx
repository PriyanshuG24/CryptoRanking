import React, { useContext } from 'react'
import CryptoCoinContext from '../../context/crypto/CryptoCoinContext';
import {toast} from 'react-toastify'
import Graph from '../layout/Graph';
function FavCoinCurrency({ name, symbol, marketCap, rank, imgUrl, change, price, uuid ,sparkline}) {
    const {delFavCoin} =useContext(CryptoCoinContext) 
    const onClick=(e)=>{ 
        e.preventDefault();
        delFavCoin(e.currentTarget.id);
        toast.success(`${name} removed from Favourites`); 
        
    }
  return (
    <> 
            <tr className={`hover:bg-blue-200 hover:border-blue-400 ursor-pointer bg-blue-100 duration-300 hover:scale-105 `}>
                <td className='px-3 py-6'>
                    <div >
                        <button className="btn btn-ghost btn-circle" type='checkbox' id={uuid} value={name} onClick={onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 justify-end flex" fill='red' viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td className='px-3 py-6'>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="font-bold text-lg">{rank}</div>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">{name}</div>
                            <div className=" opacity-80 text-lg">{symbol}</div>
                        </div>
                    </div>
                </td>
                <td className='px-3 py-6 text-lg font-semibold '>
                    $ {price}
                </td>
                <td className='px-3 py-6 text-lg font-semibold'>
                    $ {marketCap}
                </td>
                <td className={`px-3 py-6 text-lg ${parseFloat(change) < 0 ? 'text-red-500' : 'text-green-500'} font-semibold flex justify-center`}>
                    <div className="flex-col">
                        <div>{parseFloat(change)<0?"-":'+'}{Math.abs(change)}%</div>
                        <div><Graph sparkline={sparkline} change={change} width={'100px'} height={'50px'} /></div>
                    </div>
                </td>
            </tr >
        </>
  )
}

export default FavCoinCurrency
