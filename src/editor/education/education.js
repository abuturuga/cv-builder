import './education.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EducationBox from './education-box/education-box';
import {addEducation, editEducation} from '../../actions/education-actions';
import {generateId} from '../../utils';


class Education extends Component {

  constructor(props) {
    super(props);

    this.addEducation = this.addEducation.bind(this);
    this.onInputBoxChange = this.onInputBoxChange.bind(this);
  }

  addEducation() {
    this.props.dispatch(addEducation({id: generateId()}))
  }

  onInputBoxChange(id, field) {
    this.props.dispatch(editEducation({id, field}));
  }

  render() {
    return (
      <div className="editor-education-container">
        <div>
          {this.props.education.map(item =>
            <EducationBox key={item.id}
              onChange={this.onInputBoxChange}
              {...item}/>
          )}
        </div>

        <FloatingActionButton onClick={this.addEducation}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

}

const mapStateToProps = ({education}) => ({education});
Education = connect(mapStateToProps)(Education);
export default Education;
