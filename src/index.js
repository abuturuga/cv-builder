import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import store from './store';
import {Tabs, Tab} from 'material-ui/Tabs';
import Editor from './editor/editor';
import Preview from './preview/preview';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onInfoChange = this.onInfoChange.bind(this);
  }

  onInfoChange(info) {
    this.setState({info});
  }

  render() {
    return(
      <div className="app-container">
        <Tabs>
          <Tab label="preview">
            <Preview/>
          </Tab>
          <Tab label="editor">
            <Editor/>
          </Tab>
        </Tabs>
      </div>
    );
  }

}


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#app-root')
);
