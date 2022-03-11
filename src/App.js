import React,{useEffect, useState} from "react"
import './App.css';
import BackgroundImages from "./BackgroundImages"

//The link below contains an array of over 100 quotes and authors.

let quoteSourceURrl= "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

// This is the set up for react use state ...   const[useState, setState]= useState(initialState)

const[quote, setQuote]= useState("This is the defualt.");
const[author, setAuthor]= useState("defualt Author");
const[randomNumber,SetRandomNumber]=useState(0);
const[quoteDatabase,SetQuoteDatabase]=useState(null)
const[background,setBackground]= useState("https://media.istockphoto.com/photos/multicolored-leaves-picture-id1318863607?b=1&k=20&m=1318863607&s=612x612&w=0&h=DX9Zm51DHmrnPOMU-vRcMGjIHtu3hYYy4omFhy2S2fw=")

//This function below runs effect on the app when its called.

const fetchQuotes= async(url)=>  // This line fetches the data from the source
{ const response= await fetch(url)  // await the successful fetch of the url
  const parseJSON= await response.json()            // this converts the dadta to ensure it is in json format
  SetQuoteDatabase(parseJSON.quotes)               // this lines sets the array quotes that has been formated to json to our SetDatabase element
  console.log(parseJSON)                           //this line is a safety net to check in the console in the even our function has an issue here.
}

useEffect(()=>{
 
  fetchQuotes(quoteSourceURrl)  // invokes/calls the function when needed.

},[quoteSourceURrl]) //[quoteSourceUrl] is what the database is dependent on 



//let quote="This is the default";
//let author=" defualt Author"
const newQuoteAndAuthor= ()=>{
  setQuote("This is an new quote");
  setAuthor("New Author")
}

const getRandomNumber= () =>{
let randomNumCal=Math.floor(Math.random() * 11 )
  SetRandomNumber(randomNumCal)
  
    setQuote(quoteDatabase[randomNumCal].quote)
    setAuthor(quoteDatabase[randomNumCal].author)
    setBackground(BackgroundImages[randomNumCal])
  
}

/*In the public folder/.idex.html file contains the script tag for the inclusion of the font awesome icons*/




  return (
    <div className="App" >
      <header className="App-header">
      </header>
      <body style={{backgroundImage: "url(" + background + ")"}}>
     <div id="wrapper">
<div id="quote-box">
  <div >
    <i class="fa fa-quote-left"> </i><span id="text">{quote}</span>
    <i class="fa fa-quote-right"> </i>
  </div>
  <div id="author">- {author}<span class="author"></span></div>
  <div class="buttons">
  <div class="social" >
  <a id="fb-status" target="_blank" style={{backgroundImage: "url(" + background + ")"}}><i class="fa-brands fa-facebook"></i></a>
  <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=Quote Machine Project- Quote of the Day:  
   
   ${quote}  
                                                                            -${author}`)}target="_blank"><i class="fa-brands fa-twitter"></i></a>  
  </div>
  <button id="new-quote" target="#" style={{backgroundImage: "url(" + background + ")"}} onClick={()=>getRandomNumber()}>new quote</button></div>
</div>
<p></p>
<div class="footer"><a style={{color:"white"}} href="https://codepen.io/E-Rolle">- by E-Rolle</a></div></div>
</body>
    </div>
     
  );
}

export default App;

/* if you want to include results from your function that are saved in js {} for example {quote} into you href a element link to pre write a message 
to tweet when the page loads you can utilize w3schools.com 's Javascript encodeurl()Function. This is needed becuase the browers isnt sure
how to interpret the curly brakets so it is cuasing the page to be unable to load properly  */