import React from 'react';
import "./MessMenu.css"
const WeeklyMenu = ({ menuItems }) => {
  return (
    <>
    <h1>l</h1>
    <h1>l</h1>
    <h1>l</h1>
    <div className=" container min-w-544 mx-auto   bg-gradient-to-bl from-purple-400 to-pink-400 p-4 pb-16  h-full rounded-lg">
    <h1 className="text-centre text-2xl font-bold mb-4">Weekly Meal Menu</h1>
    <div className="mess grid grid-cols-4 gap-4 bg-gray-300 p-10 border-solid border-2 rounded-md  bg-gradient-to-br from-green-300 to-red-300">
      {/* <div className="col-span-1"></div> */}
      <div className="col-span-1 font-bold">Day</div>
      <div className="col-span-1 font-bold">Breakfast</div>
      <div className="col-span-1 font-bold">Lunch</div>
      <div className="col-span-1 font-bold">Dinner</div>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="col-span-1 font-bold">{item.day}</div>
          <div className="col-span-1">{item.breakfast}</div>
          <div className="col-span-1">{item.lunch}</div>
          <div className="col-span-1">{item.dinner}</div>
        </React.Fragment>
      ))}
    </div>
    </div>
    </>
  );
};

export default WeeklyMenu;
