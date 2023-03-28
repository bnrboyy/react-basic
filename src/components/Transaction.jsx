import "./Transaction.css";
import Item from "./Item";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props; // ต้องรับค่าจาก Props ก่อนนำไปใช้งาน
  // const name = useContext(DataContext); // เป็นการเรียกใช้ DataContext
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <>
      <ul className="item-list">
        {items.map((el) => {
          /* return <Item key={index} title={el.title} amount={el.amount}/> */
          return <Item key={el.id} {...el} />; // spread operator
        })}
      </ul>
      <div className="report-container">
        <div className="report-income">
          <h3>รายรับ</h3>
          <p>{formatNumber(income.toFixed(2))} บาท</p>
        </div>
        <div className="report-expense">
          <h3>รายจ่าย</h3>
          <p>{formatNumber(expense.toFixed(2))} บาท</p>
        </div>
        <div>
          <h3>คงเหลือ</h3>
          <p>{formatNumber((income - expense).toFixed(2))} บาท</p>
        </div>
      </div>
    </>
  );
};

export default Transaction;
