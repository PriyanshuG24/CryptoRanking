import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
function SupplyInfo({ supply, name, symbol,change }) {
    console.log(supply)
    const roundToMillion = (value) => {
        return (value / 1000000).toFixed(2);
    }
    if (!supply) {
        return null
    }
    const { max, total, circulating } = supply
    if (total === undefined || circulating === undefined || max === undefined) {
        return null
    }
    const roundedMax = roundToMillion(max);
    const roundedTotal = roundToMillion(total);
    const roundedCirculating = roundToMillion(circulating);
    let val = 0;
    if (max === null && total !== null) {
        val = roundedTotal;
    } else if (max !== null && total === null) {
        val = roundedMax;
    } else {
        val = roundedCirculating;
    }
    const progress = ((parseFloat(roundedCirculating) / parseFloat(val)) * 100).toFixed(2);

    console.log(progress);
    return (
        <>
            <div className='flex-col space-y-5 ml-2'>
                <h1 className='text-4xl font-bold'>Supply information</h1>
                <p className='text-lg font-semibold text-gray-600'>View the total and circulating supply of Hedera, including details on how the supplies are calculated.</p>
            </div>
            <div className=' rounded-2xl'>
                <div className="px-5 py-5">

                    <div className="flex flex-col mt-10 space-y-5">
                        <div className="flex justify-between">
                            <div className='text-lg font-medium text-green-600'>Verified Supply</div>
                            <div style={{ width: '150px', height: "150px" }}>
                                <CircularProgressbar
                                    value={progress}
                                    text={`${progress}%`}
                                    styles={{
                                        // Customize the root svg element
                                        root: {},
                                        // Customize the path, i.e. the "completed progress"
                                        path: {
                                            // Path color
                                            stroke: 'blue',
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            // Rotate the path
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                        // Customize the circle behind the path, i.e. the "total progress"
                                        trail: {
                                            // Trail color
                                            stroke: '#d6d6d6',
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                            // Rotate the trail
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                        // Customize the text
                                        text: {
                                            // Text color
                                            fill: 'black',
                                            // Text size
                                            fontSize: '16px',
                                        },
                                        // Customize background - only used when the `background` prop is true
                                        background: {
                                            fill: '#3e98c7',
                                        },
                                    }}
                                />

                            </div>
                        </div>
                        <div className="flex  justify-between">
                            <div className='text-lg font-normal'>Circulating Supply</div>
                            <div className='text-lg font-bold'>{roundedCirculating} million {symbol}</div>
                        </div>
                        <div className="flex  justify-between">
                            <div className='text-lg font-normal'>Max Supply</div>
                            <div className='text-lg font-bold'>{val} million {symbol}</div>
                        </div>
                        <div className="flex  justify-between">
                            <div className='text-lg font-normal'>Issuance Blockchain</div>
                            <div className='text-lg font-bold'>{name}</div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SupplyInfo
