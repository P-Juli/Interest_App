import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [results, setResults] = useState(null);
const[investment,setInvestment]=useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    setInvestment(userInput["current-savings"])
    // The + sign will attempt to convert these string values to numbers.
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData)
  };

// console.log(results["current-savings"])
  return (
    <div>
      <Header />
      <UserInput 
      onCalculate={calculateHandler}
       />
       {!results && <p style={{textAlign:'center'}}>no data found </p>}
      {results && <ResultsTable 
      data={results}
      investment={investment}
      />}
    </div>
  );
}

export default App;
