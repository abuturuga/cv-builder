import './experience.scss';
import React from 'react';
import {connect} from 'react-redux';

const experienceBox = ({firm, position, address, start, end, description}, index) =>
<div className="preview-experience-box" key={index}>
  <div className="experience-header">
    <span className="firm">{firm}</span>
    <span className="position">{position}</span>
  </div>
  <div className="experience-meta">
    <span className="address">{address}</span>
  </div>
  <p className="description">{description}</p>
</div>

function Experience({experience}) {
  const items = experience.map((e, i) => experienceBox(e, i));

  return (
    <div>{items}</div>
  )
}

const mapStateToProps = ({experience}) => ({experience});
Experience = connect(mapStateToProps)(Experience);
export default Experience;
