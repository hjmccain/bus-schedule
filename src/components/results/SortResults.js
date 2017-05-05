import React from 'react';

class SortResults extends React.Component {
  state = { usd: 'selected-currency', cad: '' }

  setCurrency(currency) {
    this.props.getData(this.props.date, currency);
    currency === 'USD' ?
    this.setState({ usd: 'selected-currency', cad: '' }) :
    this.setState({ usd: '', cad: 'selected-currency' })
  }

  render() {
    return (
      <div>
        <p className="currency">
          <span
            className={this.state.usd}
            onClick={() => {this.setCurrency('USD')}}>USD</span> |
          <span
            className={this.state.cad}
            onClick={() => {this.setCurrency('CAD')}}>CAD</span>
        </p>
      </div>
    )
  }
}

export default SortResults;
