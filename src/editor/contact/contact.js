import './contact.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {setContact} from '../../actions/contact-actions';


class Contact extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const {value, name} = event.target,
          prop = {};

    prop[name] = value;
    this.props.dispatch(setContact(prop))
  }

  render() {
    const {address, phone, skype, email, linkedIn} = this.props.contact;

    return (
      <Paper>
        <div className="paper-content">
          <TextField
            floatingLabelText="Address"
            name="address"
            value={address}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Phone"
            name="phone"
            value={phone}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Skype"
            name="skype"
            value={skype}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="Email"
            name="email"
            value={email}
            onChange={this.onInputChange}
            fullWidth={true} />

          <TextField
            floatingLabelText="LinkedIn"
            name="linkedIn"
            value={linkedIn}
            onChange={this.onInputChange}
            fullWidth={true} />
        </div>
      </Paper>
    );
  }

}


const mapStateToProps = ({contact}) => ({contact});
Contact = connect(mapStateToProps)(Contact);
export default Contact;
