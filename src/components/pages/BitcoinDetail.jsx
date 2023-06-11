import React, {  useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Graph from '../layout/Graph';
import { Link } from 'react-router-dom';
import SupplyInfo from './SupplyInfo';
import ValueStatistics from './ValueStatistics';
import Spinner from '../../utility/Spinner';

function BitcoinDetail() {
  const apiKey=process.env.REACT_APP_CRYPTOX_APIKEY;
  const location = useLocation();
  const [loading, setLoading] = useState(true); 
  const queryParams = new URLSearchParams(location.search);
  const uuid = queryParams.get('uuid');
  const [bitCoinData, setBitCoinData] = useState({ sparkline: [], change: null });
  const [bitCoinDataOHLC, setBitCoinDataOHLC] = useState({ low: null, high: null, avg: null });
  useEffect(() => {
    setLoading(true)
    const callApi = async () => {
      const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': "ee689010a7msh15fefff9efe2a0cp11f207jsnb6b3224c5b26",
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setBitCoinData(data.data.coin);
      setLoading(false)
    };

    callApi();
  }, [uuid,apiKey]);
  useEffect(() => {
    setLoading(true)
    const callApi = async () => {
      const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/ohlc?referenceCurrencyUuid=yhjMzLPhuIDl&interval=day';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': "ee689010a7msh15fefff9efe2a0cp11f207jsnb6b3224c5b26",
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data.ohlc[0]);
        setBitCoinDataOHLC(result.data.ohlc[0]);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    callApi();
  }, [uuid,apiKey])
  console.log(bitCoinData)
  const roundToMillion = (value) => {
    return ((value / 1000000).toFixed(2)) * 80;
  }
  return loading ? <Spinner/> : (
    <>
      <div className='border-4 '>
        <div className='flex items-center space-x-2 mx-10 my-10 text-lg text-gray-600 font-medium' >
          <div>
            <Link to='/'>Coin</Link>
          </div>
          <div>&#8592;</div>
          <div>
            {bitCoinData.name}
          </div>
        </div>
        <div className='flex items-center space-x-8 mx-10 my-10'>
          <div style={{ width: "50px", height: "50px" }}><img src={bitCoinData.iconUrl} alt="" /></div>
          <div className='flex items-baseline space-x-3'>
            <div className='text-3xl font-bold'>{bitCoinData.name}</div>
            <div className='flex items-center text-xl font-medium'>
              {/* <div>{bitCoinData.symbol}</div> */}
              <div className='flex items-center space-x-2'>
                <div className='ml-2'>{bitCoinData.symbol}</div>
                <div className='flex items-center justify-center bg-blue-50 text-black text-xs rounded w-6 h-5'>
                  {bitCoinData.rank}
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='ml-2'>&#x20B9;{roundToMillion(bitCoinData.price)} million</div>
                <div className='flex items-center justify-center bg-blue-50 text-black text-xs rounded w-8 h-5'>
                  Live
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='border-2'>
        <div className=' flex-col space-y-8 mx-10 my-10 items-center justify-start'>
          <div className='flex space-x-5'>
            <div className='text-xl font-bold'>
              SUMMARY
            </div>
            <div className='text-lg font-medium text-gray-500'>
              {bitCoinData.description}
            </div>
          </div>
          <div className='flex space-x-10 items-center'>
            <h1 className='text-lg font-bold'>Price Chart</h1>
            <h2 className='text-gray-700 font-medium' >
              24h{" "}
              <span
                className={` font-bold ${bitCoinData.change < 0 ? "text-red-500" : "text-green-500"
                  }`}
              >
                {parseFloat(bitCoinData.change) < 0 ? "-" : '+'}{bitCoinData.change}%
              </span>
            </h2>

            <h2 className='text-gray-700 font-medium'>High <span className='text-gray-600 font-bold'> &#x20B9;{roundToMillion(bitCoinDataOHLC.high)} million</span></h2>
            <h2 className='text-gray-700 font-medium'><span className='text-gray-600 font-bold'>Low &#x20B9;{roundToMillion(bitCoinDataOHLC.low)} million</span></h2>
            <h2 className='text-gray-700 font-medium'><span className='text-gray-600 font-bold'>Average &#x20B9;{roundToMillion(bitCoinDataOHLC.avg)} million</span></h2>
          </div>
        </div>
        <div className='mx-10 my-20'></div>
        <div className='mx-10 my-10'>
          <Graph sparkline={bitCoinData.sparkline} change={bitCoinData.change} width={'auto'} height={'350px'} />
        </div>
        <div className='flex mx-10 my-10 justify-between space-x-8'>
          <div><ValueStatistics details={bitCoinData} /></div>
          <div><SupplyInfo supply={bitCoinData.supply} name={bitCoinData.name} symbol={bitCoinData.symbol} change={bitCoinData.change} /></div>
        </div>
      </div>
    </>
  );
}

export default BitcoinDetail;
