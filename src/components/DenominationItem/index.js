// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, denominationBalance} = props
  const {value} = denominationItem

  const onClickEvent = () => {
    denominationBalance(value)
  }

  return (
    <li className="denom_list">
      <button type="button" className="button" onClick={onClickEvent}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
