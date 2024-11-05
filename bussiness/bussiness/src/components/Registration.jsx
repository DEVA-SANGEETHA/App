import React from 'react'

const Registration = () => {
  return (
    <div>
       <h1>REGISTRATION PAGE</h1>
          <input type="text" name="ID" id="" placeholder='ENTER NAME'/><br /><br />
          <input type="text" name="Address" id=""placeholder='ADDRESS' /><br /><br />
          <input type="text" name="Mail" id=""placeholder='E-MAIL ID' /><br /><br />

          <input type="password" name="Password" id=""placeholder='PASSWORD' /><br /><br />
          <button type="submit">Register</button><br /><br />
          
    </div>
  )
}

export default Registration
