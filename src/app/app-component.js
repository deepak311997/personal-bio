import React from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';

import './app.scss';

export default function AppComponent() {
  return (
    <>
      <Header/>
      <hr className='divider'/>
      <Content/>
      <hr className='divider'/>
      <Footer/>
    </>
  );
}
