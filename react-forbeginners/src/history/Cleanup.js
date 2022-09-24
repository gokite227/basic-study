import userEvent from "@testing-library/user-event";
import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("distroy :(");
  },[]);
  return <h1>Hallo</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;