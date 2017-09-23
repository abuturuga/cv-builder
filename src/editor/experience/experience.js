import './experience.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ExperienceBox from './experience-box/experience-box';
import {addExperience} from '../../actions/experience-actions';


class Experience extends Component {

  constructor(props) {
    super(props);
    this.addExperience = this.addExperience.bind(this);
  }

  addExperience() {
    this.props.dispatch(addExperience())
  }

  render() {
    console.log(this.props.experience);
    return (
      <div className="editor-experience-container">
        <FloatingActionButton onClick={this.addEducation}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

}

const mapStateToProps = ({experience}) => ({experience});
Experience = connect(mapStateToProps)(Experience);
export default Experience;
