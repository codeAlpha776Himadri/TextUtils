import React from 'react'

const Navbar = ({mode , color}) => {

    

  return (
    <div className='Navbar'>
        <nav className= {`navbar navbar-${mode} navbar-expand-lg bg-${mode}`} >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Textform</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link  active" href="#">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link  active" href="#">About Us</a>
                </li>
            </ul>
            <div className="form-check  form-switch  mode-btn">
                <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label mx-3  " htmlFor="flexSwitchCheckChecked"  style={{color : color == 'light' ? 'black' : 'white'}}>{mode} Mode</label>
            </div>
            </div>
        </div>
     </nav>
    </div>
  )
}

Navbar.defaultProps = {
    mode : 'dark',
    color : 'white' 
}

export default Navbar