import React from 'react';
import {connect} from 'react-redux';


function Intro({firstName, lastName, headLine, summary}) {
  return (
    <div className="preview-info">
      <div className="info-header">
        <h1 className="info-name">{firstName} &nbsp; {lastName}</h1>
        <p className="info-headline">{headLine}</p>
      </div>

      <div className="preview-section">
        <h1 className="preview-section-title">About me</h1>

        <div className="preview-section-content">
          <p className="section-text">{summary}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({intro}) => intro;
Intro = connect(mapStateToProps)(Intro);

export default Intro;
