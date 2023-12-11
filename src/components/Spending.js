import Classes from './Spending.module.css'
import { useState, useEffect } from 'react'
import { Data } from '../Data'
import Footer from './Footer'

function Spending() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [maxAmountIndex, setMaxAmountIndex] = useState(0)

  useEffect(() => {
    // Find the index of the box with the highest amount
    let maxIndex = 0
    Data.forEach((data, index) => {
      if (data.amount > Data[maxIndex].amount) {
        maxIndex = index
      }
    })
    setMaxAmountIndex(maxIndex)
  }, [])

  return (
    <>
    {/* Dynamically render the charts */}
      <div className={Classes.Spending_Body}>
        <h1>Spendings - Last 7 days</h1>
        <div className={Classes.charts}>
          {Data.map((data, key) => {
            const isMaxAmount = key === maxAmountIndex
            return (
              <div>
                <div
                  key={data.amount}
                  className={Classes.subCharts}
                  onMouseEnter={() => setHoveredIndex(key)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === key && (
                    <p className={Classes.amount}>{data.amount}</p>
                  )}
                  <div className={Classes.bar}>
                    <div
                      className={`${Classes.box} ${
                        isMaxAmount ? Classes.maxAmount : ''
                      }`}
                      style={{ height: `${50 + data.amount}px` }}
                    ></div>
                  </div>
                </div>
                <div className={Classes.day}>{data.day}</div>
              </div>
            )
          })}
        </div>
        <div className={Classes.line}></div>
      </div>
      <Footer />
    </>
  )
}

export default Spending
