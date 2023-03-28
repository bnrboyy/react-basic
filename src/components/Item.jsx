import Protypes from "prop-types";
import "./Item.css";

const Item = (props) => {
  const { title, amount } = props; // Props Destructuring
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount).toFixed(2))}
      </span>
    </li>
  );
};

/* proptype validator */
Item.propTypes = {
  title: Protypes.string.isRequired,
  amount: Protypes.number.isRequired,
};

export default Item;
