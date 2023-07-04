import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {useState,useEffect} from "react"
import Header from "./components/Header";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Expeirnce from "./components/Expeirnce";
import About from "./components/About";

import "./styles/header.css"
import "./styles/home.css"


function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async ()=>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const jsonData = await response.json();
      setData(jsonData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  return (
    <div>
        <Router>
          <Header />
          <Routes>
              <Route path="/" element = {<Home d={fetchData}/>}/>
              <Route path="/about" element = {<About />}/>
              <Route path="/experirnce" element = {<Expeirnce />}/>
              <Route path="/shopping" element = {<Shopping />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App;
