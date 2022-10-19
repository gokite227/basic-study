import React from "react";


    const root = document.getElementById("root");
    const Title =  () => (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
            Hello I'm a title
        </h3>
        );
    const Button = () => (
        <button style={{
            backgroundColor:"tomato",
            }} onClick={() => console.log("im clicked")}>
                Click me
        </button>
        );
    const Container = () => (
        <div>
            <Title />
            <Button />    
        </div>
    );
    ReactDOM.render(<Container />, root);