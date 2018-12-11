import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div onClick={browserHistory.goBack}>
      Back
    </div>
  )
}

export default BackButton;
