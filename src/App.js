import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([]);
  const [uid, setUid] = useState(1);

  // focus
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus()
  })

  const uniqueId = () => {
    const currentId = uid;
    setUid(currentId + 1);
    return currentId;

  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add
  const addTitle = () => {
    if (inputValue === "") {
      alert("Enter something");
    }
    else {
      const obj = { id: uniqueId(), title: inputValue };
      setArr([...arr, obj]);
      setInputValue("");
    }
  };

  // delete 
  const deleteTitle = (id) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log(element);
    }
    if (inputValue === "") {
      alert("Enter something");
    }
    else {
      const updatedData = arr.filter((item) => item.id !== id);
      console.log(id)
      // console.log(item.id)
      setArr(updatedData);
      setInputValue("");
    }
  };
  // Update
  const updateTitle = (id, value) => {
    if (inputValue === "") {
      alert("Enter something");
    }
    else {
      const index = arr.findIndex((item) => item.id === id);

      if (index !== -1) {
        const updatedObj = { ...arr[index] };

        console.log(updatedObj);

        updatedObj.title = value;
        updatedObj.id = id;

        const updatedArr = [...arr];
        updatedArr[index] = updatedObj;

        setArr(updatedArr);
        setInputValue("");
      }
    }

  };
  return (
    <div class="td">
      <h2 class="head">MY TODO</h2>
      <div class="hd">
        <input
          ref={inputref}
          class="txt"
          type="text"
          placeholder="Text"
          size="50"
          id="myTxt"
          name="in1"
          value={inputValue} onChange={handleInputChange}
        // value={inputValue}
        // onChange={handleInputChange}
        ></input>

        <button class=".button" onClick={() => addTitle()}>Add</button>
        <button class=".button" onClick={() => updateTitle(uid, inputValue)}>Update</button>
        <button class=".button" onClick={() => deleteTitle(uid)}>Delete</button>
      </div>


      <ul class="cnt">
        {arr.map((item) => (
          <li class="li"
            onClick={(e) => (setInputValue(item.title), setUid(item.id))}
            key={item.id}>{item.title}

          </li>
        ))}
      </ul>


    </div >

  );
}

export default App;
