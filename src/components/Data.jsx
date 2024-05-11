import React from 'react'


const Data = () => {
    const user = {
        name: "Aman",
        class: "BCA",
        roll_no: 45
    }

  return (
    <div>
        <div className='anothertestclass' style={{color:"red", background:"violet", borderRadius:"10px"}}>This data is shown with the help of a dictionary : name: {user.name}, class: {user.class}, roll: {user.roll_no}</div>

    </div>

  )
}

export default Data