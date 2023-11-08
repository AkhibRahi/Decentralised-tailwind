import React from 'react'
import heroVid from '../assets/video.mp4'

function Hero() {
    return (
        <div className='w-full h-[90vh] top-[90px] '>
            <video className='object-cover h-full w-full absolute z-[-1]' src={heroVid} autoPlay loop muted />
            <div className='text-white w-full flex flex-col justify-center items-center h-[90%] text-center'>
                <h1>Decentralized</h1>
                <h1 className='py-2'> <span className='text-[var(--primary-blue)]'>Trading</span> Protocol</h1>
                <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
                <div>
                    <button className='m-2'>Use Defi</button>
                    <button className='m-2'>FAQ</button>
                </div>
            </div>
            <div>
                <p className='text-white text-center font-bold text-2xl'>Total Volume Secured: $42,104,783,662.47</p>
            </div>
        </div>
    )
}

export default Hero