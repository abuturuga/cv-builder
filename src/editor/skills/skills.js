import './skills.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {addSkill, removeSkill} from '../../actions/skills-actions';


class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skill: ''
    };

    this.addSkill = this.addSkill.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  removeSkill(skill) {
    this.props.dispatch(removeSkill(skill));
  }

  addSkill() {
    this.props.dispatch(addSkill(this.state.skill));
    this.setState({skill: ''});
  }

  onInputChange(event) {
    const {value} = event.target;
    this.setState({skill: value});
  }

  render() {
    return  (
      <Paper>
        <div className="paper-content">
          <TextField
            floatingLabelText="First Name"
            name="firstName"
            value={this.state.skill}
            onChange={this.onInputChange}/>

          <FlatButton
            label="add skill"
            onClick={this.addSkill} />

          <div className="skills-container">
            {this.props.skills.map((skill, index) => {
              return (
                <Chip key={index}
                  onRequestDelete={this.removeSkill.bind(this, index)}>
                  {skill}
                </Chip>
              )
            })}
            <Chip />
          </div>
        </div>
      </Paper>
    )
  }

}

const mapStateToProps = state => {
  return state;
};
Skills = connect(mapStateToProps)(Skills);
export default Skills;
