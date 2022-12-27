import React from 'react'

export const Home = () => {
  return (
    <>
    <div className='bgcolor'>
    <div className='home'>Home</div>
    <div className='mx-5' >
    <div className='row'>
      <div className='col-md-8'>    <h4>hi,</h4>
    <h1>I'm Manoj Kumar</h1>
    <h3>Mern Stack Developer</h3>
    <button className='btn btn-primary ' >Hire Me</button>

    <p className='my-5'>Basically I'm a Full Stack Developer.I'm having the knowledge of Html,Css,Javascript,Boostrap,Reactjs, <br />Nodejs,Expressjs and MongoDb.I have build many projects such as Calculator,Contact Form,To Do List <br />Currently I'm working on my new project which is Weather App in Reactjs.And I used to live in Ambala <br />
    City.My hobby is listening Music and playing volleyball.I used to watch cricket alot.I used to work also <br />
    as a Freelancer.I have worked for different clients.Please contact me if you have any query or suggestions.</p> 
    </div>

   
      <div className='col-md-4'>
    <img  src="ocean.jpg" alt="" width="100%" height='100%' className='d-flex'/>

      </div>

    </div>

    </div>
    
   
    </div>
    </>
  )
}
