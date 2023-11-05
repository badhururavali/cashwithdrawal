// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  denominationBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="denom_container">
          <div className="details">
            <div className="symbol">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance_container">
            <p className="your_bal">Your Balance</p>

            <div>
              <p className="balance">{balance}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul_list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                key={eachItem.id}
                denominationBalance={this.denominationBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
