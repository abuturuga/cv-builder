import './editor.scss';
import React, {Component} from 'react';
import Stepper from './stepper/stepper';
import Intro from './intro/intro';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0
    };
  }

  renderActiveView() {
    const {stepIndex} = this.state;

    return [
      <Intro />,
      <Contact/>,
      <Skills />,
      <Experience/>,
      <Education />
    ][stepIndex];
  }

  render() {
    return (
      <div className="editor-view">
        <Stepper stepIndex={this.state.stepIndex}
          onStepChange={stepIndex => this.setState({stepIndex})}/>

        <div className="stepper-view">
          {this.renderActiveView()}
        </div>
      </div>
    );
  }

}

export default Editor;
