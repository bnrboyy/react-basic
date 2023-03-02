import "./App.css";
import Title from "./components/Title"
import Transaction from "./components/Transaction"
import Description from "./components/Description"


function App2() {
  return (
    <div className="container">
        <Title/>
        <Description/>
        <Transaction/>
    </div>
  );
}

export {App2};
