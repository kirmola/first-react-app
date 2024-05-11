import React from 'react'

const Button = () => {

    const user = {
        name: "Aman",
        class: "BCA",
        roll_no: 45
    }
  return (
    <>
        <button className='testclass'>I am a gyrating pollination soab</button>
        <div className='anothertestclass'>This data is shown with the help of a dictionary : name: {user.name}, class: {user.class}, roll: {user.roll_no}</div>
    </>
  )
}

export default Button