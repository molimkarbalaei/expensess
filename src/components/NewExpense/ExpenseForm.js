import React, { useState } from "react";
import "./ExpenseForm.css";

//برای این که مطمئن بشیم اطلاعات ذخیره میشه از USESTATE استفاده میکنم
function ExpenseForm(props) {
  const [enterTitlle, setEnterTitle] = useState(""); //1
  const [enterAmount, setEnterAmount] = useState(""); //2
  const [enterDate, setEnterDate] = useState(""); //3  ====>>> merge:
  //passing an obj:====>>>
  // const [userInput, setUserInput] = useState({
  //   enterTitlle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  // این استیت قبلیه یعنی توی باکس ما یه استرینگ خالی داریم دیگه.اونه

  const titleChangeHandler = (event) => {
    //1
    setEnterTitle(event.target.value); //==>> 1-1
    // setUserInput({
    //   ...userInput,
    //   enterTitlle: event.target.value,
    // });  /// age be previous state depends bod nemishe az in rah raft
    // pas===============>

    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitlle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //2
    setEnterAmount(event.target.value); //==>> 2-1
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // }); =============>  2-2
    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    //3
    setEnterDate(event.target.value); //==>> 3-1
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    //===========> 3-2
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitlle: event.target.value };
    // });
  };

  //aval event but vali vaghti tuye consol ro negah mikoni ye target darim ke values unie ke type kardim
  //pas migim event.target.value ke bebinim che

  const submitHandler = (event) => {
    event.preventDefault(); //bar nagarde be defauld
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // expense data obj: ====>
    const expenseData = {
      title: enterTitlle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate(""); // barmigarde be '' bade submit
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitlle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
// hame chiz ro tabaghe bandi va file bandi mikonim
