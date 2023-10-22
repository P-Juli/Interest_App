import React from 'react'

const ResultsTable = (props) => {
  console.log("the value i am looking for",props.investment)
  

  return (
    
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((datas)=>{return(
          <tr>
            <td>{datas.year}</td>
            <td>{datas.savingsEndOfYear}</td>
            <td>{datas.yearlyInterest}</td>
            <td>{datas.savingsEndOfYear -props.investment - datas.yearlyContribution*datas.year}</td>
            <td>{datas.year}</td>
          </tr>)})
          }
        </tbody>
      </table>
   
  )
}

export default ResultsTable
