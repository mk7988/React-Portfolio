import React from 'react'
import Skill from './Skill'

export const About = () => {
  return (
    <>
    <div className='aboutbg'>
    <div className='text'>About</div>
 
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Project : To Do List</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p class="card-text">A simple to do list using states in Reactjs. It was a very simple project using Reactjs.I also use map,find and filter method.</p>
  
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Project : Calculator</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p class="card-text">A very simple and easy project using functions in Javascript.I also use Html and Css part to give design im my project.</p>
    {/* <a href="/" class="card-link">Card link</a>
    <a href="/" class="card-link">Another link</a> */}
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Project : Contact Form</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p class="card-text">It was also a very cool project for me.I have also use validations in contact form.I used Bootstrap classes in my project.</p>
    {/* <a href="/" class="card-link">Card link</a>
    <a href="/" class="card-link">Another link</a> */}
  </div>
</div>
    </div>
  </div>
</div>
<Skill/>
</div>
  
    </>

  )
}
