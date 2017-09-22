import './editor.scss';
import React from 'react';
import Intro from './intro/intro';
import Contact from './contact/contact';


export default () => {
  return (
    <div className="editor-view">
      <Intro />
      <br />
      <Contact />
    </div>
  );
};
