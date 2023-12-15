import React from 'react'
import Child from './Child'
import ChildTwo from './ChildTwo'
import ChildThree from './ChildThree'
const Parent = () => {
  let obj={
    number1:1,
    string1:"str",
    fun:function(){
      // console.log("This is a function")
       return 'This is a function'
    }
  }
  return (
    <div>
      <h4>
        Question 1 simple prop
      </h4>
      This is inside Parent component
      <Child attr="This is a Child prop"/> 
      <h4>
        Question 2 prop with number string function
      </h4>
      <ChildTwo attr1={obj} />
      <ChildThree message="This is a message"/>
      <ChildThree />

      <h4>

      </h4>
    </div>
  )
}

export default Parent
