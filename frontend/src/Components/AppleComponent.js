import React from 'react'

function AppleComponent() {
    function AppleDisplay(num){
        if(num===0 || num===1){
          return `John has ${num} apple`
        } else if(num > 1){
          return `John has ${num} apples`
        } else {
          return 'Отрицательное число'
        }
      }

    return (
    <div>
        <h1>{AppleDisplay(7)}</h1>
    </div>
  )
}

export default AppleComponent
