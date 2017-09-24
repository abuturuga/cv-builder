import './skills.scss';
import React from 'react';
import {connect} from 'react-redux';


function Skills({skills}) {
  return (
    <div>
      {skills.map((skill, index) => <span key={index}>{skill}</span>)}
    </div>
  );
}

const mapStateToProps = ({skills}) => ({skills});
Skills = connect(mapStateToProps)(Skills);
export default Skills;
