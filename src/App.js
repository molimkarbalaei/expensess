import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMY_EXPENSES = [
  {
    id: "e1",
    title: "shecodes course",
    amount: 124.5,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "food", amount: 50, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "house renting",
    amount: 160,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "keyboard",
    amount: 70,
    date: new Date(2021, 5, 12),
  },
];
// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);
  // function App() {
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h2", {}, "lets get started"),
  //     React.createElement(Expenses, { items: expenses })
  //   );
  // }

  // avali 'div' unie ke tuye html darim,
  //2vomi objicti ke configures mikone un element ro ke un div hich attribute nadare
  //3vomi اون متنه

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log("in app.js");
    // console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
