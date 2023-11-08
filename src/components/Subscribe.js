import React from 'react'

function Subscribe() {
  return (
    <div className=' bg-black text-white text-center w-full px-4 py-16 mx-auto'>
        <h1>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-full mr-4' type='email' placeholder='Enter Your Email'/>
            <button>Sign Up</button>
        </div>
        <div className='flex justify-center items-center py-2'> 
            <input className='mr-2' type='checkbox'/>
            <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
    </div>  
  )
}

export default Subscribe