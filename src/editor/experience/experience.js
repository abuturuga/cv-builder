import './experience.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {setIntro} from '../../actions/experience-actions';


class Experience extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper>
        <div className="paper-content">
          <div className="page-header">

          </div>
        </div>
      </Paper>
    );
  }

}

const mapStateToProps = ({experience}) => experience;
Experience = connect(mapStateToProps)(Experience);
export default Experience;
