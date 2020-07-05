import React from 'react';
import Typewriter from 'typewriter-effect';
import './content_landingpage.css';

const Content_LandingPage = () =>{
    return(
        <div>
            <div className='content_c'>
                <div className='center-text'>
                    <h1 className="welcome-text">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString('Welcome to Anonymous Teams')
                            .start();
                        }}/>
                    </h1>
                    <h5 className='about'>
                    <Typewriter
                            options={{
                                strings: ['Private', 'Mysterious','Original'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                    </h5>
                    <button className='btn btn-lg btn-outline-danger'>Login</button>            
                </div>
            </div>
            <footer className='footer mt-auto'>
            <p>made with ❤ in India</p>
            </footer>
        </div>
    )
};

export default Content_LandingPage;