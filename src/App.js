import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Textform from './Textform';
import Alert from './Alert';
import About from './About';
import Services from './Services'
import { BrowserRouter as Router, Switch,Route,Routes,Link } from "react-router-dom";

function App() {

  const [AlertObj, setAlert] = useState(null) ; 
  const [mode, setmode] = useState('light') ; 

  const showAlert = (type , message) => {
    setAlert({ type : type , message : message });
    setTimeout(() => {
      setAlert(null) ; 
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') { 
      setmode('light') 
      document.body.style.backgroundColor = 'white' 
      document.body.style.color = 'black' 
      document.title = 'Text Utils : Light'
      // showAlert('success' , 'Light mode enabled') ; 
    } else { 
      setmode('dark') 
      document.body.style.backgroundColor = '#212529' 
      document.body.style.color = 'white'
      document.title = 'Text Utils : Dark'
      // showAlert('success' , 'Dark mode enabled') ;
    }
  } ; 

  return (
    <div className="App">
      
      

      <Router>
        <Navbar  title='TextUtils' mode={mode}  toggleMode={toggleMode}/> 
        {/* <div>
        <Alert alert={AlertObj}/>
        <Textform  title='Enter Your Text to Analyse' mode={mode}  showAlert={showAlert}/>
        </div> */}
        <div className='Routes-container'>
          <Routes>

            <Route exact path="/about" element={<About/>}></Route>
            
            <Route exact path='/'  element={ 
                <div>
                  <Alert alert={AlertObj}/>
                  <Textform  title='Enter Your Text to Analyse' mode={mode}  showAlert={showAlert}/>
                </div>
             }></Route>

             <Route exact path='/home'  element={ 
                <div>
                  <Alert alert={AlertObj}/>
                  <Textform  title='Enter Your Text to Analyse' mode={mode}  showAlert={showAlert}/>
                </div>
             }></Route>

             <Route exact path='/services'  element={<Services/>}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
