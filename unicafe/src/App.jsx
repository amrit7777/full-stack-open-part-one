import { useState } from 'react'

const Button=(props)=>{
  return(
    <>
    <button onClick={props.onClick}>{props.name}</button>
    </>
  )
}

const StatisticLine=({text,value})=>{
  if(text==="positive"){
    return(

      <tr>
      <td>{text} </td>
      <td>{value}%</td>
      </tr>

    )
  }
  return(

    <tr>
    <td>{text} </td>
    <td>{value}</td>
    </tr>

  )
}

const Statistics=({good,neutral,bad,sum,avg,positive})=>{
  if(sum==0){
    return(<>
    <p>No feedback given</p>
    </>)
  }
  return(<table>
    <tbody>
  <StatisticLine text="good" value ={good} />
  <StatisticLine text="neutral" value ={neutral} />
  <StatisticLine text="bad" value ={bad} />
  <StatisticLine text="all" value ={sum} />
  <StatisticLine text="average" value ={avg} />
  <StatisticLine text="positive" value ={positive} />
  </tbody>
  </table>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const newGood=()=>{

    setGood((ngood)=>ngood+1)

  }
  const newNeutral=()=>{

    setNeutral((nneutral)=>nneutral+1)

  }
  const newBad=()=>{

    setBad((nbad)=>nbad+1)

  }
  const sum=good+neutral+bad
  const avg=((good*1)+((-1)*bad))/sum
  const positive=(good/sum)*100

  return (
    <>
      <h1>Give feedback</h1>
      <Button name={'good'} onClick={newGood}></Button>
      <Button name={'neutral'} onClick={newNeutral}></Button>
      <Button name={'bad'} onClick={newBad} ></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} avg={avg} positive={positive}></Statistics>
    </>
  )
}

export default App
