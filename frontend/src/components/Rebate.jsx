import React from 'react'
import './Rebate.css'
function Rebate() {
    return (
        <div className='container'>
            <div className='first-container'>
                <h1 className='first-container-text-1'>Thinking of skipping the mess...</h1>
                <h1 className='first-container-text-2'>Fill Rebate Form</h1>
            </div>
            <form className='form-container'>    
                <div className='form-container-div-1'>
                    <label className='form-label-1'>Enter reason for not attending mess : </label>
                    <input type="text" className="form-input-1" placeholder="Enter reason..." />
                </div>
                <div className='form-container-div-2'>
                    <label className='form-label-2'>Start Date : </label>
                    <input className="form-input-2" type='date' />
                </div>
                <div className='form-container-div-3'>
                    <label className='form-label-3'>End Date : </label>
                    <input className="form-input-3" type='date' />
                </div>
                <button className='btn'>
          Submit
        </button>
            </form>
        </div>
    )
}

export default Rebate