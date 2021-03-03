import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  state = {
    result: "",
    height: "",
    weight: "",
    bmi: "",
    checkHealth: "",
    suggestWightRages: ''
  };
  calBmi = () => {
    const { height, weight } = this.state;

    const calcBmi = (weight / (height / 100) ** 2).toFixed(2);

    let resultDisplay =
      calcBmi > 25
        ? ' You are over weight'
        : calcBmi < 18.5 ? 'You are under weight' : 'You are healthy now';

    let suggestWightRages = Math.ceil(18.5 * (height / 100) ** 2) + ' - ' + Math.ceil(25 * (height / 100) ** 2)

    this.setState({
      bmi: calcBmi,
      result: resultDisplay,
      suggestWightRages
    });
  };
  clearAll = () => {
    this.setState({
      height: "",
      weight: "",
      bmi: "",
      result: "",
      suggestWightRages: ''

    });
  };

  render() {
    return (
      <div className="App">
        <div className="heading"><p>BMI calculater</p></div>
        <div className="container">
          <div className="ui card">
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <label>Enter your height in cm: </label>
                  <input
                    type="number"
                    value={this.state.height}
                    onChange={e => this.setState({ height: e.target.value })}
                  />
                </div>
                <br />
                <div className="field">
                  <label>Enter your Weight in kg: </label>

                  <input
                    type="number"
                    value={this.state.weight}
                    onChange={e => this.setState({ weight: e.target.value })}
                  />
                </div>
              </div>
              <button className="button" onClick={this.calBmi}>
                Submit
              </button>

            </div>
          </div>
          {this.state.bmi && this.state.bmi !== 'NaN' &&
            < div style={{ textAlign: 'center' }}>
              <p className="bmi-display">{` Your BMI is ${this.state.bmi}`}</p>
              <p>Your suggest weight range is {this.state.suggestWightRages}</p>
              <p className="result-display">{this.state.result}</p>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
