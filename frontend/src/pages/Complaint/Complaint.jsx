import React, { useState } from 'react';
import './Complaint.css'; // Import CSS file for styling

const ComplaintPage = () => {
  const [category, setCategory] = useState('');
  const [complaint, setComplaint] = useState('');
  

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category:', category);
    console.log('Complaint:', complaint);
    setCategory('');
    setComplaint('');
  };

  return (
    <>
    <h1>l</h1>
    <h1>l</h1>
    <h1>l</h1>
    <div className="complaint-container bg-gradient-to-bl from-purple-400 to-pink-400 p-4 pb-16  h-full rounded-lg">
    <h1 className='font-medium text-xl my-2 h-full'>Share Your Complaint with Us</h1>
      <form onSubmit={handleSubmit} className="complaint-form border-solid border-2 rounded-md  bg-gradient-to-br from-green-300 to-red-300">
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} className="form-control bg-orange-100">
            <option value="">Select Category</option>
            <option value="electricity">Electricity</option>
            <option value="wifi">WiFi</option>
            <option value="carpenter">Carpenter</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint Statement:</label>
          <textarea id="complaint" value={complaint} onChange={handleComplaintChange} className="form-control bg-orange-100"/>
          <input type='file' ></input>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    
    </>
  );
};

export default ComplaintPage;
