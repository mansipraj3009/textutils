
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
       <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`}>
    <Link className="navbar-brand" to="/">{props.Titles}</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
        
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.abouUs}</Link> 
      </li>
      
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
            {/* <div className={`custom-control custom-switch ${props.mode1==='light' ? 'dark' : 'light'}`}> */}

        {/* <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-secondary" onClick={props.blue}>purple</button>
                    <button type="button" className="btn btn-secondary" onClick={props.pink}>pink</button>
                    <button type="button" className="btn btn-secondary" onClick={props.green}>green</button>
                </div>
        </div> */}

            <div className={`custom-control custom-switch text-${props.mode1==='light'?'dark':'light'}`}>
        <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label" htmlFor="customSwitch1">Toggle Modes</label>
        </div>
  </div>
  
</nav>
</>
  )
}

Navbar.propTypes = {Titles : PropTypes.string.isRequired,
                    abouUs : PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     Titles : 'empty title',
//     abouUs : 'empty about us',
// }