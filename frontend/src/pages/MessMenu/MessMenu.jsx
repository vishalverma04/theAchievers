import React from 'react';
import "./MessMenu.css"
const WeeklyMenu = ({ menuItems }) => {
  return (
    <>
     <div className='mess-container'>
    <h1>Weekly menu</h1>
    <div className='first-row'>
      <div>Day</div>
      <span>Breakfast</span>
      <span>Lunch</span>
      <span>Dinner</span>
    </div>
    <div className='mess-columns'>
      {menuItems.map((item,index)=>(
        <div key={index} className='mess-row'>
         <div>{item.day}</div>
          <div>{item.breakfast}</div>
          <div>{item.lunch}</div>
          <div>{item.dinner}</div>
        </div>
      ))}
    </div>
     </div>
     
    </>
  );
};

export default WeeklyMenu;
