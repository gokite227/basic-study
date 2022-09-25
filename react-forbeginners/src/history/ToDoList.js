import userEvent from "@testing-library/user-event";
import {useState, useEffect} from "react";

function App() {
    const [toDo, setToDO] = useState("");
    const [toDos, setToDOs] = useState([]);
    const onChange = (event) => setToDO(event.target.value);
    const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === ""){
        return;
      }
      setToDOs((currentArray) => [toDo, ...currentArray]);
      setToDO("");
    };
    console.log(toDos);
    return (
        <div>
          <h1>My To Dos ({toDos.length})</h1>  
            <form onSubmit={onSubmit}>
              <input 
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="Write your to do..."
              />
              <button>Add To Do</button>
            </form>
            <hr />
            <ul>
              {toDos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
        </div>
    );
}

export default App;