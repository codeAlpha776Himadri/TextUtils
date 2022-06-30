import React, { useState } from 'react' ; 
import './Textform.css' ;

const Textform = ({showAlert}) => {

  let [ text , setText ] = useState(``) ; 
  let [ charCount , setCharCount ] = useState(0) ; 
  let [ wordCount , setWordCount ] = useState(0) ;
  let [ heading , setHeading ] = useState('Analyse text for free') ; 

  const setAndResetHeading = () => {
    setHeading('') ;
    setTimeout(() => {
      setHeading('Analyse text for free') ;
    }, 1500) ;
  }

  const toLowerCase = () => {
    setText(text.toLowerCase()) ;
    showAlert('success' , 'Text Converted to lowercase') ;  
    setAndResetHeading() ;
  }

  const toUpperCase = () => {
    setText(text.toUpperCase()) ; 
    showAlert('success' , 'Text Converted to uppercase') ; 
    setAndResetHeading() ;
  }

  const clearText = () => {
    setText('') ;
    setCharCount(0) ; 
    setWordCount(0) ;
    showAlert('danger' , 'Text cleared') ; 
    setAndResetHeading() ;  
  }

  const copyText = () => {
    navigator.clipboard.writeText(text); 
    showAlert('success' , 'Text Copied to Clipboard') ; 
    setAndResetHeading() ;
  }

  const removeSpaces = () => {
    setText(text.split(/[ ]+/).join(' ')) ; 
    setCharCount(text.length) ; 
    showAlert('success' , 'Extra spaces removed from text') ; 
    setAndResetHeading() ;
  }

  return (
    <div className='Textform'>
        <h2 className='heading'>{heading}</h2>
        <textarea name="textArea" id="textArea" cols="20" rows="12" placeholder='Enter text to transform'
            value={text}
            onChange={() => {
                const txtArea = document.querySelector('#textArea')
                setText(txtArea.value) ;
                console.log(txtArea.value) ; 
                if (txtArea.value.length == 0) {
                    setCharCount(0) ; 
                    setWordCount(0) ;
                } else {
                    setCharCount(text.length+1) ; 
                    setWordCount(text.split(/[ ]+/).length) ; 
                }
                
            }}
        />
        <div className="btn-container">
            <button type="button" className="btn btn-success mx-2"  onClick={toUpperCase}>Upper Case</button>
            <button type="button" className="btn btn-success mx-2"  onClick={toLowerCase}>Lower Case</button>
            <button type="button" className="btn btn-success mx-2"  onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-success mx-2"  onClick={removeSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-danger mx-2"  onClick={clearText}>Clear</button>
        </div>
        <div className="textStats">
             <span>The text Contains <b>{charCount}</b> Characters</span>  <br />
             The text contains <b>{wordCount}</b> Words 
        </div>
        <div className="preview">
            <h5>Preview :</h5>
            {text}
        </div>
    </div>
  )
}

export default Textform