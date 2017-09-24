import './education-box.scss';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class EducationBox extends Component {

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

  getYearsRange() {
    return Array(15).fill(0).map((i, index) => 2008 + index);
  }

  onSelectChange(name, event, index, value) {
    const {id} = this.props,
          field = {};

    field[name] = value;
    this.props.onChange(id, field);
  }

  render() {
    const {school, degree, field, start, end, description} = this.props,
          years = this.getYearsRange()
            .map(year => <MenuItem value={year} key={year} primaryText={year} />);

    return (
      <Paper>
        <div className="paper-content">
          <TextField
            floatingLabelText="School"
            name="school"
            value={school}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Degree"
            name="degree"
            value={degree}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Field of study"
            name="field"
            value={field}
            onChange={this.onInputChange}
            fullWidth={true} />

          <div className="input-row">
            <SelectField
              value={start}
              onChange={this.onSelectChange.bind(this, 'start')}
              floatingLabelText="Start"
              maxHeight={200}>
              {years}
            </SelectField>

            <SelectField
              value={end}
              onChange={this.onSelectChange.bind(this, 'end')}
              floatingLabelText="End"
              maxHeight={200}>
              {years}
            </SelectField>
          </div>

          <TextField
            floatingLabelText="Description"
            name="description"
            value={description}
            onChange={this.onInputChange}
            fullWidth={true}
            rows={2}
            multiLine={true}/>
        </div>
      </Paper>
    );
  }

}

export default EducationBox;
