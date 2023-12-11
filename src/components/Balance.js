import React from 'react'
import Classes from './Balance.module.css'
import Logo from "../images/logo.svg"

function Balance() {
  return (
    <>
      <div className={Classes.balance}>
        <div className='balance_text'>
          <p className={Classes.my_balance}>My Balance</p>
          <h1 className={Classes.balance_amount}>$921.48</h1>
        </div>
        <div>
            <img src={Logo} alt="This is the logo" />
        </div>
      </div>
    </>
  )
}

export default Balance
