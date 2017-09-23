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
import Experience from './experience/experience';


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0
    };
  }

  renderStepper() {
    const {stepIndex} = this.state;

    return (
      <Stepper linear={false} activeStep={stepIndex}>
        <Step>
          <StepButton onClick={() => this.setState({stepIndex: 0})}>Intro</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => this.setState({stepIndex: 1})}>Contact</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => this.setState({stepIndex: 2})}>Skills</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => this.setState({stepIndex: 3})}>Experience</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => this.setState({stepIndex: 4})}>Education</StepButton>
        </Step>
      </Stepper>
    );
  }

  renderActiveView() {
    const {stepIndex} = this.state;
    return [<Intro />, <Contact/>, <Skills />, <Experience/>][stepIndex];
  }

  render() {
    return (
      <div className="editor-view">
        <div className="stepper-container">
          {this.renderStepper()}
        </div>
        <div className="stepper-view">
          {this.renderActiveView()}
        </div>
      </div>
    );
  }

}

export default Editor;
