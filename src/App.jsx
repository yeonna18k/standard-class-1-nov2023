import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [arr, setArr] = useState(initialState);
  const [resultArr, setResultArr] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  const border = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };
  const font = {
    fontWeight: "bold",
  };
  function handleForEach() {
    let temp = "";
    arr.forEach(function (value, index) {
      console.log(value, index);
      temp += `${index}: ${value} `;
    });
    setResultArr(temp);
  }
  function handleFilter() {
    const filtered = arr.filter(function (value, index) {
      return value.includes(query);
    });
    setResultArr(filtered.join(" "));
  }
  function handleMap() {
    const mapped = arr.map(function (value, index) {
      return value.toUpperCase();
    });
    setResultArr(mapped.join(" "));
  }
  function handleReduce() {
    const reduced = arr.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResultArr(reduced);
  }
  function handlePush() {
    if (query.length <= 0) {
      alert("텍스트를 입력해주세요");
      return false;
    }
    const newArr = [...arr, query];
    setArr(newArr);
    setResultArr(newArr.join(" "));
  }
  function handlePop() {
    const newArr = arr.pop();
    console.log(arr);
    setResultArr(arr.join(" "));
    // setArr(newArr);
    // setResultArr(newArr.join(" "));
  }
  function handleSlice() {
    const sliced = arr.slice(0, query);
    setResultArr(sliced.join(" "));
  }
  function handleSplice() {
    const spliced = arr.splice(0, 1, query);
    setResultArr(arr.join(" "));
  }
  function handleIndexof() {
    const newArr = [...arr];
    const indexof = newArr.indexOf(query) + 1;
    setResultArr(indexof);
  }
  function handleIncludes() {
    let includes = "false";
    for (let i = 0; i < arr.length; i++) {
      if (query === arr[i]) {
        includes = "true";
      }
    }
    setResultArr(includes);
  }
  function handleFind() {
    let find = arr.find(function (element) {
      if (element === query) {
        return true;
      } else {
        return false;
      }
    });
    setResultArr(find);
  }
  function handleSome() {
    const some = arr.some(function (element) {
      if (element.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResultArr(some);
  }
  function handleEvery() {
    const every = arr.every(function (element) {
      return element.includes(query);
    });
    setResultArr(every);
  }
  function handleSort() {}
  function handleJoin() {}
  return (
    <div className="App">
      <h1>Standard반 배열 API</h1>
      <input
        placeholder="Enter text"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexof}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div style={border}>
        <span style={font}>원본배열 : </span>
        {arr.join(", ")}
      </div>
      <div style={border}>
        <span style={font}>결과물 : </span> {resultArr}
      </div>
    </div>
  );
}

export default App;
