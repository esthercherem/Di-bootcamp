import "./App.css";
import axios from "axios";
import { useState } from 'react';


function App (){
const [quote, setQuote]= useState('')
const [author, setAuthor] = useState ('')

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
      console.log(res.data.author)
      setQuote(res.data.content)
      setAuthor(res.data.author)
    }).catch(err => {
   console.log(err)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
    <p>"{quote}"</p>
    <p>-{author}</p>
    {/* OR  */}
    {/* { quote ? <p>{quote}</p> : null } */}
    {/* OR */}
    {/* {quote && <p>{quote}</p>} */}
    </div>
  );
}

export default App;
