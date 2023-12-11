import React from 'react'
import classes from "./Footer.module.css"
function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.left}>
            <p>Total this month</p>
            <h1>$478.33</h1>
        </div>
        <div className={classes.right}>
            <h1>+2.4%</h1>
            <p>from last month</p>
        </div>
    </div>
  )
}

export default Footer