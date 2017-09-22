import './preview.scss';
import React, {Component} from 'react';
import {Intro} from './components/index';


class Preview extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="preview-page">
        <Intro {...this.props.intro} />
      </div>
    );
  }

}

export default Preview;
