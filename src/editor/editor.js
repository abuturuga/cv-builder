import './editor.scss';
import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import Intro from './intro/intro';
import Contact from './contact/contact';
import Skills from './skills/skills';


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0
    };
  }

  render() {
    return (
      <div className="editor-view">
        <Intro />
        <br />
        <Contact />
        <br />
        <Skills />
      </div>
    );
  }

}

export default Editor;
