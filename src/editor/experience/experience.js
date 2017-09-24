import './experience.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ExperienceBox from './experience-box/experience-box';
import {addExperience, editExperience} from '../../actions/experience-actions';
import {generateId} from '../../utils';


class Experience extends Component {

  constructor(props) {
    super(props);
    this.addExperience = this.addExperience.bind(this);
    this.onInputBoxChange = this.onInputBoxChange.bind(this);
  }

  addExperience() {
    this.props.dispatch(addExperience({id: generateId()}))
  }

  onInputBoxChange(id, field) {
    this.props.dispatch(editExperience({id, field}));
  }

  render() {
    return (
      <div className="editor-experience-container">
        <div className="experience-boxes-container">
          {this.props.experience.map(item =>
            <ExperienceBox key={item.id}
              onChange={this.onInputBoxChange}
              {...item}/>
          )}
        </div>

        <div className="floating-button-container">
          <FloatingActionButton onClick={this.addExperience}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({experience}) => ({experience});
Experience = connect(mapStateToProps)(Experience);
export default Experience;
