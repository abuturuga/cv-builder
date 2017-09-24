import './contact.scss';
import React from 'react';
import {connect} from 'react-redux';


function Contact({contact}) {
  const fields = Object.keys(contact).map((key, index) => {
    return (
      <li key={index}>
        <span className="contact-list-key">{key}</span>
        <span className="contact-list-value">{contact[key]}</span>
      </li>
    )
  });

  return (
    <div className="">
      <ul>{fields}</ul>
    </div>
  );
}

const mapStateToProps = ({contact}) => ({contact});
Contact = connect(mapStateToProps)(Contact);
export default Contact;
