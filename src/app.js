import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import store from './store';
import View from './view';
import {addNumberAction, lessNumberAction, multiNumberAction, divNumberAction, delNumberAction, resNumberAction} from './actions';


function mapStateToProps(reduxState) {
  return {
    opOne: reduxState.valuePred,
    opTwo: reduxState.valueNow,
    operPred : reduxState.operPred,
    operNow: reduxState.operNow,
    result : reduxState.result
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: bindActionCreators(addNumberAction, dispatch),
    lessNumber: bindActionCreators(lessNumberAction, dispatch),
    multiNumber: bindActionCreators(multiNumberAction, dispatch),
    divNumber: bindActionCreators(divNumberAction, dispatch),
    delNumber: bindActionCreators(delNumberAction, dispatch),
    resNumber: bindActionCreators(resNumberAction, dispatch)

  }
}


let ViewConnected = connect(mapStateToProps, mapDispatchToProps)(View);


ReactDOM.render(
  React.createElement(ViewConnected, {store: store}),
  document.getElementById('app')
);


window.store = store;
window.addNumberAction = addNumberAction;
window.lessNumberAction = lessNumberAction;
window.multiNumberAction = multiNumberAction;
window.divNumberAction = divNumberAction;
window.delNumberAction = delNumberAction;
window.resNumberAction = resNumberAction;
