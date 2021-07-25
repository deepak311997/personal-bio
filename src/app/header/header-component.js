import React from 'react';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import './header.scss';

export default function HeaderComponent() {
    return (
        <header>
            <nav className='header-nav'>
                <a href='/'>IAMDEEPAK</a>
                <a className='header-nav__resume' href='/assets/resume.pdf' target='_blank'>RESUME</a>
            </nav>
            <div className='header-content'>
                <div className="header-profile">
                    <img src="assets/img/deeps.jpg" className="header-profile-image" width="150px" height="150px"/>
                </div>
                <div className='header-body'>
                    <div className='header-body__intro'>
                        <Typist startDelay={300} avgTypingDelay={140}>Hi, I'm Deepak</Typist>
                    </div>
                    <Typist cursor={{ show: false }} avgTypingDelay={100}>
                        <Typist.Delay ms={2500} />
                        <div className='header-body__dsgn'>Software Engineer</div>
                        <div className='header-body__tech'>JavaScript, ReactJS + Redux</div>
                    </Typist>
                    <hr className='divider'/>
                    <div className='header-body__desc'>
                        I'm an enthusiastic Software Engineer. I love developing web applications and I am always into exploring and learning.
                    </div>
                </div>
            </div>
        </header>
    )
}
