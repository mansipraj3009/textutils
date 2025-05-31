import React, {useState} from 'react'

export default function About() {

    const [mystyle,setStyle]= useState({
    color : 'black',
    backgroundColor: 'white' ,
    border : '1px sloid white'
});

const [btntext,setbtnmodde]=useState('modes');

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

  const darkmode = () => {
    if(mystyle.color === 'black'){
        setStyle({
            color : 'white',
    backgroundColor: 'black' ,
    border : '1px sloid black'
        })
        setbtnmodde('click to convert light mode');
    }
            else {
                setStyle({
                    color : 'black',
                    backgroundColor: 'white' ,
                     border : '1px sloid white'
                })
                setbtnmodde('click to convert dark mode');
            }
}

  return (
   
      <>
      <div className="container my-3" style={mystyle}>
        <h1 className='my-3'>About As</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>

        <div className="container my-3">
            <button className="btn btn-primary" onClick={darkmode}>{btntext}</button>
        </div>

      </div>
      
      </>

  )
}
