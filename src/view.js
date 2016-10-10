import React from 'react';

let ResultView = function({number1,opP,number2,opN,result}){
    return (
      <div style={{color: "green", fontSize: "22px"}}>
      {number1}{opP}{number2}{opN}{result}
      </div>
    )
};


class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleAddNumber = this.handleAddNumber.bind(this);
    this.handleLessNumber = this.handleLessNumber.bind(this);
    this.handleMultiNumber = this.handleMultiNumber.bind(this);
    this.handleDivNumber = this.handleDivNumber.bind(this);
    this.handleDelNumber = this.handleDelNumber.bind(this);
    this.handleResNumber = this.handleResNumber.bind(this);
  }


  handleChange(event) {
    this.setState({text: event.target.value});
  }


  handleAddNumber() {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.addNumber(number);
      this.setState({text: ""});
    }
  }

  handleLessNumber() {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.lessNumber(number);
      this.setState({text: ""});
    }
  }

  handleMultiNumber() {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.multiNumber(number);
      this.setState({text: ""});
    }
  }

  handleDivNumber() {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.divNumber(number);
      this.setState({text: ""});
    }
  }

  handleDelNumber() {
      let number = parseInt(this.state.text);
      this.props.delNumber(number);
    }

  handleResNumber() {
      let number = parseInt(this.state.text)
      if (Number.isInteger(number)) {
        this.props.resNumber(number);
        this.setState({text: ""});
    }
  }

  render() {
    return (
      <div>
        <input type="text"
               onChange={event => this.handleChange(event)}
               value={this.state.text}
        />
        <p></p>
        <button onClick={event => this.handleAddNumber()}>+</button>
        <button onClick={event => this.handleLessNumber()}>-</button>
        <button onClick={event => this.handleMultiNumber()}>*</button>
        <button onClick={event => this.handleDivNumber()}>/</button>
        <button onClick={event => this.handleResNumber()}>=</button>
        <button onClick={event => this.handleDelNumber()}>CE</button>


      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
      <h1>Calcolatrice</h1>
      <h6>(operazione singola)</h6>
      </div>
    );
  }
}


let View = function(props){
  return (
    <div>
      <Header/>
      <FormData
        addNumber={props.addNumber}
        lessNumber={props.lessNumber}
        multiNumber={props.multiNumber}
        divNumber={props.divNumber}
        delNumber={props.delNumber}
        resNumber={props.resNumber}/>
      <p></p>
      <ResultView
        number1={props.opOne}
        opP={props.operPred}
        number2={props.opTwo}
        opN={props.operNow}
        result={props.result}/>
    </div>
  )
};


export default View;
