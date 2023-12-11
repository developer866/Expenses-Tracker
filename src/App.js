import React from 'react'
import Classes from './App.module.css'
import Balance from './components/Balance'
import Spending from './components/Spending'

function App() {
  return (
    <> 
    <div className={Classes.Container}>
        <Balance />
    </div>
    <div className={Classes.Container}>
        <Spending />
    </div>
    </>
  )
}

export default App