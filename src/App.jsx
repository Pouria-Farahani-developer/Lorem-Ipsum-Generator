import { useState } from "react";
import data from './data';

function App() {
  
  const[count,setCount]=useState(0)
  const[Text,setText]=useState([])

  const handlesubmit = (e) => {
    e.preventDefault()
    let amout = parseInt(count)
    if(count <= 0){
      amout = 0
    }

    if(count >= 100){
      amout = 100
    }
    setText(data.slice(0,amout))
  }

  return (
    <div className="Section_Center">
      <h4>تولید کننده لورم ایپسوم</h4>
      <form className="lorem" onSubmit={handlesubmit}>

      <label htmlFor="total">تعداد پاراگراف</label>
      <input type="number" min='1' name="total" value={count} onChange={(e)=>{setCount(e.target.value)}} />
      <button type="submit">بساز</button>

      </form>
      <article className="lorem-text">
        {Text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </div>
  );
}

export default App;
