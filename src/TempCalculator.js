import React, { Component } from 'react';


function BoilingVerdict(props) {
  return props.temp >= 100
    ? <p>Water is boiling</p>
    : <p>Water is not boiling</p>;
}

const scales = {
  'c': 'Celsius',
  'f': 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Enter temperature in {scales[this.props.scale]}:</legend>
          <input type='text' value={this.props.value} onChange={this.valueChanged} />
        </fieldset>
      </form>
    );
  }
}

const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TempCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 'c',
      value: ''
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(value) {
    this.setState({
      scale: 'c',
      value
    });
  }

  handleFahrenheitChange(value) {
    this.setState({
      scale: 'f',
      value
    });
  }

  render() {
    const { value, scale } = this.state;
    const celsius = scale === 'c' ? value : tryConvert(value, toCelsius);
    const fahrenheit = scale === 'f' ? value : tryConvert(value, toFahrenheit);

    return (
      <div>
        <TemperatureInput value={celsius} scale='c' onChange={this.handleCelsiusChange} />
        <TemperatureInput value={fahrenheit} scale='f' onChange={this.handleFahrenheitChange} />
        <BoilingVerdict temp={parseFloat(celsius)} />
      </div>
    );
  }
}

export default TempCalculator;
