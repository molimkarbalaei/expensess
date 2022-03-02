import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //const ExpenseItem=(props)=>{

  //we'll not be assigning values like equals signs
  //instead we'll assigning new values by calling a function(usestate)
  //The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
//it is compoment that just out putting an expenses item
