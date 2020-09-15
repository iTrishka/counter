import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';

const DisplayStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 20px;
    border: 1px solid white;
    div {
      font-size: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
`

const BtnStyle = styled.button`
  width: 50px; 
  height:50px;
  border-radius: 50px;
  padding: 0 10px;
  margin: 30px;
  font-size: 30px;
  color: #c813de;
  background-color: transparent;
  border: 2px solid #ff12fd;
  :hover{
    cursor: pointer;
    border: 2px solid #af56ae;
  }
`

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (sign)=> {
    if(sign==="+"){
      console.log("1")
    setCount(count+1);
    } else {setCount(count-1);}
  }

  return (
    <div className="App">
      <header className="App-header">
        <DisplayStyle>
          <div> {count} </div>
          <div>
            <BtnStyle onClick={() => updateCount("-")}>-</BtnStyle>
            <BtnStyle onClick={() => updateCount("+")}>+</BtnStyle>
          </div>
        </DisplayStyle>
      </header>
    </div>
  );
}

export default App;
