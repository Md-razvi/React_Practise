import React from 'react'
import Child from './Child'
import ChildTwo from './ChildTwo'
import ChildThree from './ChildThree'
import Button from './Button'

const Parent = () => {
  let obj={
    number1:1,
    string1:"str",
    fun:function(){
      // console.log("This is a function")
       return 'This is a function'
    }
  }
  const as=function(){
    console.log("Print Click me")
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
      {/* message is not define here so it takes from from  */}
      <ChildThree />
      {/* message is edited in the given atribute */}
      <ChildThree message="This message is edited"/>
      {/* This is a Button Component */}
      <Button name="Click" fun={as}/>
    </div>
  )
}
ChildThree.defaultProps={
  //message attribute
  message:'lorem epsdkjfalkdjfakda dfjlaj asdkfjal; asdefda alkjdke asdkjf;iowkn lowjnf oweijca lskdfjieklajdf'
}

export default Parent
