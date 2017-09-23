import './experience-box.scss';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


class ExperienceBox extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const {value, name} = event.target,
          prop = {};

    prop[name] = value;

  }

  render() {
    return (
      <Paper>
        <div className="paper-content">
          <div>
            <TextField
              floatingLabelText="Firm"
              name="firm"
              onChange={this.onInputChange}/>

            <TextField
              floatingLabelText="position"
              name="position"
              onChange={this.onInputChange}/>
          </div>
        </div>
      </Paper>
    );
  }

}

export default ExperienceBox;
