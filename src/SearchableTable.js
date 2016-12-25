import React from 'react';

const data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.handleStockedChange = this.handleStockedChange.bind(this);
  }

  handleSearchValueChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  handleStockedChange(e) {
    this.props.onStockedOnlyChanged();
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.handleSearchValueChange} />
        <br />
        <label>
          <input
            type='checkbox'
            checked={this.props.stockedOnly}
            onChange={this.handleStockedChange} />
          Only stocked items
        </label>
      </div>
    );
  }
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">
        {props.category}
      </th>
    </tr>
  );
}

function ProductRow(props) {
  const name = props.product.stocked
    ? props.product.name
    : <span style={{color: 'red'}}>{props.product.name}</span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

function ProductsTable(props) {
  let rows = [], lastCategory = null;
  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

class SearchableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      stockedOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.toggleStockedOnly = this.toggleStockedOnly.bind(this);
  }

  handleFilterTextChange(filterText) {
    const filteredProducts = data;
    this.setState({
      filterText
    });
  }

  toggleStockedOnly() {
    this.setState((prevState) => ({
      stockedOnly: !prevState.stockedOnly
    }));
  }

  render() {
    const { filterText, stockedOnly } = this.state;
    const products = data.filter(
      (p) => p.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 && (stockedOnly ? p.stocked: true)
    );
    return (
      <div>
        <SearchBar
          onFilterChange={this.handleFilterTextChange}
          onStockedOnlyChanged={this.toggleStockedOnly}
          filterText={filterText}
          stockedOnly={stockedOnly} />
        <ProductsTable products={products} />
      </div>
    );
  }
}

export default SearchableTable;
