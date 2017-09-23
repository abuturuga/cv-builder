import './intro.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {setIntro} from '../../actions/intro-actions';


class Intro extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const {value, name} = event.target,
          prop = {};

    prop[name] = value;
    this.props.dispatch(setIntro(prop))
  }

  render() {
    const {firstName, lastName, headLine, summary} = this.props;

    return (
      <Paper>
        <div className="paper-content">
          <TextField
            floatingLabelText="First Name"
            name="firstName"
            value={firstName}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Headline"
            name="headLine"
            value={headLine}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Summary"
            name="summary"
            value={summary}
            onChange={this.onInputChange}
            multiLine={true}
            rows={2}
            fullWidth={true} />
        </div>
      </Paper>
    );
  }

}


const mapStateToProps = ({intro}) => intro;
Intro = connect(mapStateToProps)(Intro);
export default Intro;
