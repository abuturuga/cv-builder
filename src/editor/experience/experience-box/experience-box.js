import './experience-box.scss';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';


class ExperienceBox extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const {value, name} = event.target,
          {id} = this.props,
          field = {};

    field[name] = value;
    this.props.onChange(id, field);
  }

  onDateChange(name, event, date) {
    const field = {},
          {id} = this.props;

    field[name] = date;
    this.props.onChange(id, field);
  }

  render() {
    const {firm, position, address, start, end, description} = this.props;

    return (
      <Paper>
        <div className="paper-content">
          <div className="input-row">
            <TextField
              floatingLabelText="Firm"
              value={firm}
              name="firm"
              onChange={this.onInputChange}/>

            <TextField
              floatingLabelText="Position"
              value={position}
              name="position"
              onChange={this.onInputChange}/>
          </div>

          <TextField
            floatingLabelText="Address"
            value={address}
            name="address"
            onChange={this.onInputChange}
            fullWidth={true}/>

          <div className="input-row">
            <DatePicker onChange={this.onDateChange.bind(this, 'start')}
                value={start}
                hintText="Start date"
                autoOk={true}/>
            <div className="input-row">
              <DatePicker onChange={this.onDateChange.bind(this, 'end')}
                value={end}
                hintText="End date"
                autoOk={true}/>
              <Checkbox label="Still working"/>
            </div>
          </div>

          <TextField
            floatingLabelText="Description"
            name="description"
            value={description}
            onChange={this.onInputChange}
            fullWidth={true}
            rows={2}
            multiLine={true} />
        </div>
      </Paper>
    );
  }

}

export default ExperienceBox;
