import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const leftselectors = [];
const rightselectors = [];

for(let i=0; i<10; i++){
  leftselectors.push({
    value: i*10,
    key: i,
    name: `${i*10} to ${i*10+10}`
  })

  rightselectors.push({
    value: i,
    key: i,
    name: i
  })

}




function App() {
 
  const [leftDisplay, setLeftDisplay] = useState(null)
  const [rightDisplay, setRightDisplay] = useState(null)
const handleClick = (evt) =>{
  if(evt.target.value < 10) {
    setRightDisplay(evt.target.value)
  } else {
    setLeftDisplay(evt.target.value/10)
    
  }
  console.log("click worked")
}

  return (
    <div className="App">
      <h1>{leftDisplay}{rightDisplay}</h1>
     {!leftDisplay && !rightDisplay && <h1>How old are you?</h1>}
      { !leftDisplay && leftselectors.map(x=>{
        return (<button onClick={handleClick} value={x.value} key={x.key} name={x.name}>{x.name}</button>)
      })}

      {leftDisplay &&!rightDisplay && rightselectors.map(x=>{
        return(<button onClick={handleClick} value={x.value} key={x.key} name={x.name}>{x.name}</button>)
      })}
      {leftDisplay && rightDisplay && <button>Calculate</button>}
    </div>


  )
}

export default App
