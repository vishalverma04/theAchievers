import React, { useState } from 'react';
import './Complaint.css'; // Import CSS file for styling
import { useEffect } from 'react';

const ComplaintPage = () => {
  const [category, setCategory] = useState('');
  const [complaint, setComplaint] = useState('');
  const [media, setMedia] = useState('');
  

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
  };
  console.log(media)
  return (
    <>
    <div className="container-complaint">
    <h1>Share Your Complaint with Us</h1>
      <form onSubmit={handleSubmit}>
         <div className='form-group-1'>
           <label>Category:</label>
           <select className='category-input' onChange={handleCategoryChange}>
            <option value="">Select category</option>
            <option value="wifi">wifi</option>
            <option value="electricity">electricity</option>
            <option value="carpenter">carpenter</option>
            <option value="sweaper">sweaper</option>
           </select>
         </div>
         <div className='form-group-2'>
             <p>write complaint here:</p>
             <textarea placeholder='write complaint here' className='complaint-area' onChange={handleComplaintChange}></textarea>
         </div>
         <div>
          <input name="media" onChange={(e)=>setMedia(e.target.value)} className='input-file' type='file'></input>
         </div>
         <button className='btn-complaint'>Submit</button>
      </form>
    </div>
    
    </>
  );
};

export default ComplaintPage;
