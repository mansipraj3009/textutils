// import React, {useState} from 'react'

export default function About(props) {

//     const [mystyle,setStyle]= useState({
//     color : 'black',
//     backgroundColor: 'white' ,
//     border : '1px sloid white'
// });

// const [btntext,setbtnmodde]=useState('modes');

let mystyle = {
    color : props.mode==='dark' ? 'white' :'#23313e',
    backgroundColor : props.mode==='dark' ?'#23313e':'white' ,
    border : '2px sloid' ,
    borderColor : props.mode==='dark' ? 'white' :'#23313e'

}
// function darkmode(){
//     console.log('click !!')
//      if(mystyle.color === 'white'){
//         setStyle({
//             color : 'black',
//     backgroundColor: 'white'
//         })
//     }
//             else {
//                 setStyle({
//                     color : 'white',
//                     backgroundColor: 'black'
//                 })
//             }
// }

//   const darkmode = () => {
//     if(mystyle.color === 'black'){
//         setStyle({
//             color : 'white',
//     backgroundColor: 'black' ,
//     border : '1px sloid black'
//         })
//         setbtnmodde('click to convert light mode');
//     }
//             else {
//                 setStyle({
//                     color : 'black',
//                     backgroundColor: 'white' ,
//                      border : '1px sloid white'
//                 })
//                 setbtnmodde('click to convert dark mode');
//             }
// }

  return (
   
      <>
      <div className="container my-3" style={{backgroundColor : props.mode==='dark' ?'#021b34':'white' }} >
        <h1 className='my-3' style={{color : props.mode==='dark' ?'white':'black' }}>About As</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
            <div className="accordion-item " style={mystyle} >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <strong>Analyze Ur Text</strong>
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse my-2" data-bs-parent="#accordionFlushExample" style={mystyle}>
                Texttutils gives you a way to analyze your text quickly and efficienty. Be it word count,characters count or
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                   <strong> Free To Use</strong>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse my-2" data-bs-parent="#accordionFlushExample" style={mystyle}>
                TextUtils is a free, easy-to-use text utility tool built with React. It helps users analyze and manipulate their text quickly and efficiently. Whether you're writing content, cleaning up formatting, or counting characters and words.</div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse my-2" data-bs-parent="#accordionFlushExample" style={mystyle}>
                TextUtils is a free, browser-compatible text utility tool built with React. It allows users to quickly analyze and manipulate their text with a simple and responsive user interface. Whether you're formatting, cleaning, or counting text, TextUtils has you covered.</div>
            </div>
        </div>

        {/* <div className="container my-3">
            <button className="btn btn-primary" onClick={darkmode}>{btntext}</button>
        </div> */}

      </div>
      
      </>

  )
}
