import React from 'react'
import './Rebate.css'
function Rebate() {
    return (
        <div className='container-rebate'>
            <div className='first-container-rebate'>
                <h1 className='first-container-text-1-rebate'>Thinking of skipping the mess...</h1>
                <h1 className='first-container-text-2-rebate'>Fill Rebate Form</h1>
            </div>
            <form className='form-container-rebate'>    
                <div className='form-container-div-1-rebate'>
                    <label className='form-label-1-rebate'>Enter reason for not attending mess : </label>
                    <input type="text" className="form-input-1-rebate" placeholder="Enter reason..." />
                </div>
                <div className='form-container-div-2-rebate'>
                    <label className='form-label-2-rebate'>Start Date : </label>
                    <input className="form-input-2-rebate" type='date' />
                </div>
                <div className='form-container-div-3-rebate'>
                    <label className='form-label-3-rebate'>End Date : </label>
                    <input className="form-input-3-rebate" type='date' />
                </div>
                <button className='btn-rebate'>
          Submit
        </button>
            </form>
        </div>
    )
}

export default Rebate