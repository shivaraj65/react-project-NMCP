import React ,{useState}from 'react';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App=()=>{
    const [intro,setIntro]=useState(true);
    const [body,setBody]=useState(false);
    const [count,setCount]=useState(0);
    const [len,setLen]=useState(0);

    const lettercount =(e)=>{
        if(e.target.value.length === len+1 || e.target.value.length === len-1){
            setLen(e.target.value.length);  
        }else{
            e.target.value="";
            setLen(0);
        } 
    }
return(
    <React.Fragment>
        {intro === true?
            <div className='content_c'>
                <div className='center-text'>
                <h1 className=''><Typewriter options={{
                            strings: ['N.M.C.P', 'No More Copy Paste'],
                            autoStart: true,
                            loop: true,
                        }}/>
                   </h1>
                <button 
                 className='btn btn-outline-warning btn-lg' 
                 onClick={()=>{
                    setIntro(false)
                    setBody(true)
                     }}>
                 Try it!!!
                 </button>
                </div>       
             </div>
         :null}
         {body ===true?
            <div>
                <textarea className='text-area' 
                    onChange={lettercount}>
                        try to copy and paste if you can!!!
                    </textarea>
            </div>
            :null
         }
    </React.Fragment>
    
);
}
export default App;
