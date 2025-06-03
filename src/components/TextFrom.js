import React , {useState} from 'react'

export default function TextFrom(props) {

    
    const [text,setText] = useState('');

    // new version to create the function which named is ARROW FUNCTION

    // const handleupclick = () => {
    //     console.log('click the button'+ text  );
    //     var newtext =text.toLowerCase();
    //     setText(newtext);

    // }

    //old way to craete the function

      function handleupclick(){
         console.log('click the button'+ text  );
        var newtext =text.toUpperCase();
        setText(newtext);
        props.showalert1("convert to uppercase","primary")
    }
      function handleloclick(){
         console.log('click the button'+ text  );
        var newtext =text.toLowerCase();
        setText(newtext);
    }
      function handleclearclick(){
         console.log('click the button'+ text  );
        var newtext =" ";
        setText(newtext);
    }
      function handlesentececlick(){
         navigator.clipboard.writeText(text);
         props.showalert1("copied ur text","success")
    }

    const handleronchange =(event) =>{
        setText(event.target.value);
        console.log('handleronchange' );


    }

  return (
    <>

            <div className="container">
                <div className="container my-3 " style={{color : props.mode1==='dark'?'white':'black'}}>
                        <h1 className='mb -4'>{props.heading}</h1>
                </div>

                <div className=" container my-3">
                        {/* <label htmlFor="mytext"></label> */}
                        <textarea className="form-control"  value={text} id="box1" rows="10" onChange={handleronchange} style={{backgroundColor : props.mode1==='dark'?'#253546':'white', color:props.mode1==='dark'?'white':'black' }} ></textarea>
                </div>
                <div className=" container my-3">
                        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to uppercae</button>
                        <button disabled={text.length===0}   className="btn btn-primary mx-1 my-1"  onClick={handleloclick}>Convert to lowercase</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear ur text</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlesentececlick}>Copy</button>
                </div>
            </div>

            <div className="container my-3" style={{color : props.mode1==='dark'?'white':'black'}}>
                <h1>Ur summary is Under/Below</h1>
                <p>Your sentence have {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                {/* <p>Your sentence have {text.split(/\s+/).length} words and {text.length} characters</p> */}
                <p>you read the ur sentence within {0.008 * text.split(" ").filter(Boolean).length}</p>
            </div>

            <div className="container my-3" style={{color : props.mode1==='dark'?'white':'black'}}>
                <h2>PERVIEW</h2>
                <p>{text.length>0?text : "enter the text in the box which was over here..."}</p>
            </div>
    </>
  )
}
