import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditiing] = useState(false);

  const SaveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditiing(false);
  };

  const startEditiingHandler = () => {
    setIsEditiing(true);
  };
  const stopEditingHandler = () => {
    setIsEditiing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditiingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
//onSaveExpenseData: ye prop ke expenses jadid ro montaghel kone
// the value of this prop should be a function
export default NewExpense;
