import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from './components/tabs/index';
import Editor from './editor/editor';
import Preview from './preview/preview';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intro: {
        firstName: '',
        lastName: '',
        headLine: '',
        summary: ''
      },
      contact: {
        address: '',
        skype: '',
        linkedIn: '',
        phone: '',
        email: ''
      },
      languages: [],
      experience: [],
      education: [],
      skills: []
    };
  }

  render() {
    return(
      <div className="app-container">
        <Tabs>
          <Tab label="preview">
            <Preview />
          </Tab>
          <Tab label="editor">
            <Editor />
          </Tab>
        </Tabs>
      </div>
    );
  }

}


ReactDOM.render(<App />, document.querySelector('#app-root'));
