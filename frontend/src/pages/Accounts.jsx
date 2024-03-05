import React, { useState } from 'react'
import "./Accounts.css"

function Accounts() {
const currentDate = new Date();
const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

const handleMonthChange = (event) => {
  setSelectedMonth(event.target.value);
};
const monthOptions = Array.from({ length: 12 }, (_, index) => ({
  value: index,
  label: new Date(0, index).toLocaleString('default', { month: 'long' }),
}));

const selectedMonthName = new Date(0, selectedMonth).toLocaleString('default', { month: 'long' });

return (
  <div className='container-account text-left p-2'>
    <h1 className='heading'>My Account</h1>
    <div className=" center-div flex flex-row gap-2 font-semibold">
      <div className="left-div card p-16 w-full text-3xl">Available Balance</div>
      <div className="right-div card card2 p-16 w-full text-3xl">{selectedMonthName} Bill</div>
    </div>
    
    <label className='select-text' htmlFor="monthSelector">Select Month: </label>
    <select className=' select-input m-2 p-2 rounded-sm w-36 outline-none border-none '
      id="monthSelector"
      value={selectedMonth}
      onChange={handleMonthChange}
    >
      {monthOptions.map((month) => (
        <option key={month.value} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>

    <div className='middle-div flex justify-between gap-4 p-4 text-center'>
      <div className="middle-child rounded-md bg-white w-full p-3"><h1 className="text-3xl">Days Attending Mess</h1><p className="text-2xl">28</p></div>
      <div className="middle-child rounded-md bg-white w-full p-3"><h1 className="text-3xl">Diet Charges</h1><p className="text-2xl">₹2,800</p></div>
      <div className="middle-child rounded-md bg-white w-full p-3"><h1 className="text-3xl">Miscellaneous Charges</h1><p className="text-2xl">₹1,200</p></div>
      <div className="middle-child rounded-md bg-white w-full p-3"><h1 className="text-3xl">Extra Charges</h1><p className="text-2xl">₹800</p></div>
    </div>
  </div>
);
}

export default Accounts