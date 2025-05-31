// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showalert = (message,type) => {
    setAlert({
        msg : message,
        type : type
    })
    setTimeout( () => {
      setAlert(null)
    },1500);
  }

 const togglfunc = () => {
  if(mode === 'light')
  {
    setmode('dark')
    document.body.style.backgroundColor= '#021b34';
    showalert("dark mode enable","success")
    document.title="TextUtilty -Dark Mode";

    // set time out method 

    // setTimeout( () => {
    //   setmode(null)
    // },3000)

    //set interval method 


  //   setInterval(() => {
  //     document.title="TextUtilty -Dark Mode";      
  //   }, 2000);
  //   setInterval(() => {
  //     document.title="TextUtilty -Download";      
  //   }, 1500);


   }
  else
  {
    setmode('light')
    document.body.style.backgroundColor= 'white';
    showalert("light mode enable","danger")
    document.title="TextUtilty -Light Mode";

  }
}

// const bluefuc  = () => {
//     if(mode==='light' ){
//       setmode('blue')
//       document.body.style.backgroundColor= '#9a77db';
//     }
//     else if(mode==='dark'){
//        setmode('blue')
//       document.body.style.backgroundColor= '#9a77db';
//     }
//     else
//     {
//       setmode('light');
//       document.body.style.backgroundColor=''
//     }
// }
// const pinkfuc  = () => {
//     if(mode==='light' ){
//       setmode('pink')
//       document.body.style.backgroundColor= '#d16d9f';
//     }
//     else if(mode==='dark'){
//        setmode('pink')
//       document.body.style.backgroundColor= '#d16d9f';
//     }
//     else
//     {
//       setmode('light');
//       document.body.style.backgroundColor=''
//     }
// }
// const greenfuc  = () => {
//     if(mode==='light' ){
//       setmode('green')
//       document.body.style.backgroundColor= '#4db765';
//     }
//     else if(mode==='dark'){
//        setmode('green')
//       document.body.style.backgroundColor= '#4db765';
//     }
//     else
//     {
//       setmode('light');
//       document.body.style.backgroundColor=''
//     }
// }




  return (
    <>
          {/* <Navbar Titles="Groserys" abouUs="About us" mode1={mode} togglemode={togglfunc} blue={bluefuc} pink={pinkfuc} green={greenfuc}/> */}
         
          {/* <Router> */}
              <Navbar Titles="Groserys" abouUs="About us" mode1={mode} togglemode={togglfunc} />
              <Alert alert={alert}/>
              {/* <TextFrom showalert1={showalert} heading="Enter the text to analyze below" mode1={mode} /> */}

              {/* <Switch>
              <Route exact path="/about">
                <About /> 
              </Route>
              <Route  path="/"> */}
                  <TextFrom showalert1={showalert} heading="Enter the text to analyze below" mode1={mode} />
              {/* </Route>
            </Switch>
        </Router> */}
    </>
  );
}

export default App;
