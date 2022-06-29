import React, { useState } from 'react' ; 
import './Textform.css' ; 

const Textform = () => {

  let [ text , setText ] = useState(``) ; 
  let [ charCount , setCharCount ] = useState(0) ; 
  let [ wordCount , setWordCount ] = useState(0) ; 

  const toLowerCase = () => {
    setText(text.toLowerCase()) ; 
  }

  const toUpperCase = () => {
    setText(text.toUpperCase()) ; 
  }

  const clearText = () => {
    setText('') ;
    setCharCount(0) ; 
    setWordCount(0) ;  
  }

  const copyText = () => {
    const alert = document.querySelector('.alert') ;
    alert.classList.add('show') ;
    setTimeout(() => {
        alert.classList.remove('show') ; 
    }, 2000);
    navigator.clipboard.writeText(text);
  }

  const removeSpaces = () => {
    setText(text.split(/[ ]+/).join(' ')) ; 
    setCharCount(text.length) ; 
  }

  return (
    <div className='Textform'>
        <h2>Transform Your Text for Free</h2>
        <textarea name="textArea" id="textArea" cols="20" rows="12" placeholder='Enter text to transform'
            value={text}
            onChange={() => {
                const txtArea = document.querySelector('#textArea')
                setText(txtArea.value) ;
                console.log(txtArea.value) ; 
                if (txtArea.value.length == 0) {
                    setCharCount(0) ; 
                    setWordCount(0) ;
                }else {
                    setCharCount(text.length+1) ; 
                    setWordCount(text.split(/[ ]+/).length) ; 
                }
                
            }}
        />
        <div className="btn-container">
            <button type="button" className="btn btn-primary mx-2"  onClick={toUpperCase}>Upper Case</button>
            <button type="button" className="btn btn-primary mx-2"  onClick={toLowerCase}>Lower Case</button>
            <button type="button" className="btn btn-primary mx-2"  onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2"  onClick={removeSpaces}>Remove Extra Spaces</button>
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
        <div class="alert alert-success fade" role="alert">
            Text is Copied to clipboard ! Enjoy transforming text
        </div>
    </div>
  )
}

export default Textform