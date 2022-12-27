import React from 'react'

export const Contact = () => {
  return (
    <>
    <div className='contactbg'>
    <div className="contact">Contact</div>
<div className="container">
<div class="mb-3 mt-3">
    <label for="text" class="form-label">Name:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter name" name="email"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Phone:</label>
    <input type="text" class="form-control" id="pwd" placeholder="Enter phone no." name="pswd"/>
  </div>
  <label for="comment">Message:</label>
<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
{/* 
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div> */}
  <button type="submit" class="btn btn-primary my-3">Submit</button>
  
  </div>
  </div>
    </>
  )
}
