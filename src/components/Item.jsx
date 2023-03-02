import Protypes from 'prop-types';

const Item = (props) => {
  const {title, amount} = props // Props Destructuring
  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
}

/* proptype validator */
Item.propTypes = {
  title:Protypes.string.isRequired,
  amount:Protypes.number.isRequired
}

export default Item;
