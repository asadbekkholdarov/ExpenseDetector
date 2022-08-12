// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const INIT_VALUES = [
  { id: 1, title: "Toiler Paper", amount: 24, date: new Date(2020, 5, 15) },
  { id: 2, title: "Car Insurance", amount: 12, date: new Date(2021, 1, 21) },
  { id: 3, title: "New TV", amount: 3, date: new Date(2019, 3, 12) },
  { id: 4, title: "Utilities", amount: 14, date: new Date(2020, 8, 10) },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_VALUES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
