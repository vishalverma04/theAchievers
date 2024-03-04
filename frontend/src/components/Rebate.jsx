import React from 'react'
import './Rebate.css'
function Rebate() {
    return (
        <div className='container pt-10 pb-10 flex flex-col gap-5  relative bg-indigo-500 w-full rounded-sm'>
            <div className='md:mx-32 mx-16 flex flex-col gap-3'>
                <h1 className='text-small text-left text-white'>Thinking of skipping the mess...</h1>
                <h1 className='font-semibold text-left text-4xl text-white'>Fill Rebate Form</h1>
            </div>
            <form className='bg-white py-8 md:mx-32 mx-16 rounded-md flex flex-row flex-wrap items-center justify-center md:gap-20 gap-4 p-4'>
                
                <div className='flex flex-col w-72 text-left gap-1'>
                    <label className='text-[#5a5a5a]'>Enter reason for not attending mess : </label>
                    <input type="text" className="bg-[#e3e3e3] text-xs outline-none border-none rounded-full pl-5 pr-5 p-2" placeholder="Enter reason..." />
                </div>
                <div className='flex flex-col w-72 text-left gap-1'>
                    <label className='text-[#5a5a5a]'>Start Date : </label>
                    <input className="p-2  bg-[#e3e3e3] outline-none border-none rounded-full pl-5 pr-5 placeholder:text-xs text-xs text-left" type='date' />
                </div>
                <div className='flex flex-col w-72 text-left gap-1'>
                    <label className='text-[#5a5a5a]'>End Date : </label>
                    <input className="p-2  bg-[#e3e3e3] outline-none border-none rounded-full pl-5 pr-5 placeholder:text-xs text-xs" type='date' />
                </div>
                <button className='btn rounded-full bg-slate-400 px-12 py-2 w-max items-center absolute bottom-0 transform translate-y-1/2'>
          Submit
        </button>
            </form>
        </div>
    )
}

export default Rebate