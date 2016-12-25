import React, { Component } from 'react';


const items = ['Coconut', 'Apple', 'Pear', 'Orange', 'Strawberry'];

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      fruit: items[3]
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.fruitChanged = this.fruitChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  nameChanged(e) {
    this.setState({
      name: e.target.value
    });
  }

  descriptionChanged(e) {
    this.setState({
      description: e.target.value
    });
  }

  fruitChanged(e) {
    this.setState({
      fruit: e.target.value
    })
  }

  submit() {
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.fruit);
  }

  render() {
    const fruits = items.map(
      (fruit) => <option key={fruit} value={fruit}>{fruit}</option>
    );
    return (
      <form>
        <input
          type='text'
          onChange={this.nameChanged} />
        <textarea onChange={this.descriptionChanged} />
        <select
          value={this.state.fruit}
          onChange={this.fruitChanged}>
          {fruits}
        </select>
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

export default NameForm;
