import './Transaction.css'
import Item from './Item';

const Transaction = () => {
  const data = [
    {title: "ค่ารักษาพยาบาล", amount: 2000},
    {title: "ค่ารถ", amount: 5000},
    {title: "ค่าเช่าบ้าน", amount: 4500},
    {title: "ค่าไฟ", amount: 500},
    {title: "ค่าเดินทาง", amount: 800},
  ]
  return (
    <ul className='item-list'>
      {data.map((el, index) => {
        {/* return <Item key={index} title={el.title} amount={el.amount}/> */}
        return <Item key={index} {...el}/> // spread operator
      })}
    </ul>
  );
};

export default Transaction;
