import React from 'react';
import {connect} from 'react-redux';


function Intro({firstName, lastName, headLine, summary}) {
  return (
    <div className="preview-info">
      <div className="info-header">
        <h1 className="info-name">{firstName} &nbsp; {lastName}</h1>
        <p className="info-headline">{headLine}</p>
      </div>
      <div className="info-summary">
        <h1 className="section-title">About me</h1>
        <p className="section-text">{summary}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({intro}) => intro;
Intro = connect(mapStateToProps)(Intro);

export default Intro;
