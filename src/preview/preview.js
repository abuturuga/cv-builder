import './preview.scss';
import React, {Component} from 'react';
import Intro from './intro/intro';
import Contact from './contact/contact';
import Skills from './skills/skills';


const views = [<Contact />, <Skills />, ,];
const sections = [
  'Contact', 'Skills', 'Experience', 'Education'
].map((section, index) => {
  return (
    <div className="preview-section" key={index}>
      <h1 className="preview-section-title">{section}</h1>
      <div className="preview-section-content">
        {views[index]}
      </div>
    </div>
  );
});

export default () =>
<div className="preview-page">
  <Intro />
  {sections}
</div>
