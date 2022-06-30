import React , {useState} from 'react' ;  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = ({mode,title,toggleMode}) => {

//   const [styleObj, setstyleObj] = useState({}) ; 

  let styleObj = {
    Style : { color : mode === 'light' ? 'black' : 'white' ,
              fontSize : '13px'  } , 
    text : mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'
  } ; 

  return (
      <div className='Navbar'>
        <nav className= {`navbar navbar-${mode} navbar-expand-lg bg-${mode}`} >
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">{title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  active" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  active" to="/about">About Us</Link>
                </li>
            </ul>
            <div className="form-check  form-switch  mode-btn">
                <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleMode}  style={{cursor : 'pointer'}}/>
                <label className="form-check-label mx-3  " htmlFor="flexSwitchCheckChecked"  style={styleObj.Style}>{styleObj.text}</label>
            </div>
            </div>
        </div>
     </nav>
    </div>
  )
}

Navbar.defaultProps = {
    mode : 'dark',
    color : 'white' ,
    title : 'TextUtils'
}

export default Navbar