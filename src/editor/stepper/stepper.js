import './stepper.scss';
import React from 'react';
import {
  Step,
  Stepper,
  StepButton
} from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Work from 'material-ui/svg-icons/action/work';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Create from 'material-ui/svg-icons/content/create';
import School from 'material-ui/svg-icons/social/school';


const getStepIcon = stepIndex => [
  <AccountCircle />, <ContactMail />, <Create />,
  <Work />, <School />
][stepIndex];


export default ({stepIndex, onStepChange}) => {
  const steps = [
    'Intro', 'Contact', 'Skills',
    'Experience', 'Education'
  ].map((step, index) =>
    <Step key={index}>
      <StepButton icon={getStepIcon(index)}
        onClick={() => onStepChange(index)}>
          {step}
      </StepButton>
    </Step>
  );

  return (
    <div className="stepper-container">
      <Paper>
        <Stepper linear={false} activeStep={stepIndex}>
          {steps}
        </Stepper>
      </Paper>
    </div>
  );
}
