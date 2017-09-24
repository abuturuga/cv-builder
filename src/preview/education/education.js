import './education.scss';
import React from 'react';
import {connect} from 'react-redux';

const educationBox = ({school, degree, field, start, end, description}, index) =>
<div className="preview-education-box" key={index}>
  <div className="education-header">
    <span className="school">{school}</span>
    <span className="degree">{degree}</span>
  </div>
  <p className="description">{description}</p>
</div>


function Education({education}) {
  const items = education.map((e, i) => educationBox(e, i));

  return (
    <div>{items}</div>
  );
}

const mapStateToProps = ({education}) => ({education});
Education = connect(mapStateToProps)(Education);
export default Education;
