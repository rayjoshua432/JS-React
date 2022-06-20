import React from 'react'

// Function for user information with props
const userInfo = (props) => {
   // Destructure
   const { name, gender, address } = props
   return (
      <>
      <div className='boxes'>
         <h3>Personal Information</h3>
         <div className='box-info'>
            Name: {name} <br/>
            Gender: {gender} <br/>
            Address: {address}
         </div>
      </div>
      </>
   )
}

export default userInfo