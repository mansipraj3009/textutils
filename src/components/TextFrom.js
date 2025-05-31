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
         console.log('click the button'+ text  );
        var newtext =text.charAt(1).toUpperCase();
        setText(newtext);
    }

    const handleronchange =(event) =>{
        setText(event.target.value);
        console.log('handleronchange' );


    }

  return (
    <>

            <div className="container">
                <div className="container my-3 " style={{color : props.mode1==='dark'?'white':'black'}}>
                        <h1>{props.heading}</h1>
                </div>

                <div className=" container my-3">
                        {/* <label htmlFor="mytext"></label> */}
                        <textarea className="form-control"  value={text} id="box1" rows="10" onChange={handleronchange} style={{backgroundColor : props.mode1==='dark'?'grey':'white', color:props.mode1==='dark'?'white':'black' }} ></textarea>
                </div>
                <div className=" container my-3">
                        <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercae</button>
                        <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
                        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear ur text</button>
                        <button className="btn btn-primary mx-1" onClick={handlesentececlick}>Sentence case</button>
                </div>
            </div>

            <div className="container my-3" style={{color : props.mode1==='dark'?'white':'black'}}>
                <h1>Ur summary is Under/Below</h1>
                <p>Your sentence have {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                {/* <p>Your sentence have {text.split(/\s+/).length} words and {text.length} characters</p> */}
                <p>you read the ur sentence within {0.008 * text.split(" ").length}</p>
            </div>

            <div className="container my-3" style={{color : props.mode1==='dark'?'white':'black'}}>
                <h2>PERVIEW</h2>
                <p>{text.length>0?text : "enter the text in the box which was over here..."}</p>
            </div>
    </>
  )
}
