import React from 'react'

const Conditional = () => {
    const logged_in = false

  return (
    <>
    <div>Conditional</div>
    <div>
        The data below will be shown with the help of a conditional
    </div>
    <div>logged in is hardcoded as false in Conditional.jsx</div>


    {/* I used it because it's a short syntax for if-else, you can use if else too, curly brace is just to evaluate the variable, nothing else */}
    {logged_in ? <div>Logged In</div> : <div>Not logged in</div>}
    </>
  )
}

export default Conditional