import "./App.css";
import Title from "./components/Title";
import Transaction from "./components/Transaction";
import Description from "./components/Description";
import FormComponent from "./components/FormComponent";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";

function App2() {
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const [items, setItems] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]; // return push new item
    });
  };

  useEffect(() => {
    const amount = items.map((item) => item.amount);
    const income = amount
      .filter((el) => el > 0)
      .reduce((result, el) => (result += el), 0);
    const expense = amount
      .filter((el) => el < 0)
      .reduce((result, el) => (result += el), 0);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
      default:
        return setShowReport(true);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense * -1,
      }}
    >
      <>
        <Title />
        {/* <Description /> */}
        <FormComponent onAddItem={onAddNewItem} />
        {showReport && <Transaction items={items} />}
        <div className="button" style={{ marginTop: "1rem" }}>
          <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
          <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button>
        </div>
      </>
    </DataContext.Provider>
  );
}

export { App2 };
