import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length == 0 ? (
        <h2 className="content">No item is founded</h2>
      ) : (
        filteredExpenses.map((e) => (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
            key={e.id}
          />
        ))
      )}

      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
