
import {createStore} from 'redux';

let initialState = {
  result: null,
  valueNow: null,
  valuePred: null,
  operNow: null,
  operPred: null
};

let change;

function addNumber(state, number) {

    if (state.valueNow != null) {
      change = {valueNow: number, valuePred: state.valueNow, operNow:"=", operPred: state.operNow, result: state.valueNow + number};
    }
    else {
      change = {valueNow: number, operNow:"+"};
    }
    return Object.assign({}, state, change);
}

function lessNumber(state, number) {

    if (state.valueNow != null) {
      change = {valueNow: number, valuePred: state.valueNow, operNow:"=", operPred: state.operNow, result: state.valueNow - number};
    }
    else {
      change = {valueNow: number, operNow:"-"};
    }
      return Object.assign({}, state, change);
}

function multiNumber(state, number) {

    if (state.valueNow != null) {
      change = {valueNow: number, valuePred: state.valueNow, operNow:"=", operPred: state.operNow, result: state.valueNow * number};
    }
    else {
      change = {valueNow: number, operNow:"*"};
    }
    return Object.assign({}, state, change);
}

function divNumber(state, number) {

    if (state.valueNow != null) {
      change = {valueNow: number, valuePred: state.valueNow, operNow:"=", operPred: state.operNow, result: state.valueNow / number};
    }
    else {
      change = {valueNow: number, operNow:"/"};
    }
    return Object.assign({}, state, change);
}

function delNumber(state, number) {
    change = {valueNow: null, valuePred: null, operNow:null, operPred:null, result: null};
    return Object.assign({}, state, change);
}

function resNumber(state, number) {
    switch (state.operNow) {
      case "+":
        return addNumber(state,number);
      case "-":
        return lessNumber(state,number);
      case "*":
        return multiNumber(state,number);
      case "/":
        return divNumber(state,number);

      default:
        return state

    }
}


function reducer(state, action) {
  state = state || initialState;

  switch (action.type) {

    case "ADD_NUMBER":
      return addNumber(state, action.number);
    case "LESS_NUMBER":
      return lessNumber(state, action.number);
    case "MULTI_NUMBER":
      return multiNumber(state, action.number);
    case "DIV_NUMBER":
      return divNumber(state, action.number);
    case "DEL_NUMBER":
      return delNumber(state, action.number);
    case "RES_NUMBER":
      return resNumber(state, action.number);


    default:
      return state;
  }
}

let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
let store = createStore(reducer, null, middlewares);

export default store;
