import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Welcome</h1>
      <Hello />
    </div>
  )
}

class Hello extends Component{
  render(){
    return(
      <div className='hello'>
        <h1>Welcome from class Component</h1>
      </div>
    )
  }
}

export default App
