import React from 'react'

const ChildTwo = ({attr1}) => {
  return (
    <div>
      <h4>
      This is a number {attr1.number1}
      </h4>
      <h5>
      This is  a string {attr1.string1} 
      </h5>
      <h5>
This is a function{attr1.fun}
      </h5>
      {/* {prop} */}
    </div>
  )
}

export default ChildTwo
