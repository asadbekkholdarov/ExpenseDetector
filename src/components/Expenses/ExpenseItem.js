import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const handler = () => {
    setTitle((title) => (title = "Clicked!!!"));
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button onClick={handler}>click</button>
    </Card>
  );
};

export default ExpenseItem;
