import {Component} from 'react'
import './index.css'

class HistorySearch extends Component {
  render() {
    const {historyDetails, deleteUser} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
    const onDelete = () => {
      deleteUser(id)
    }
    return (
      <li className="item-cont2">
        <p>{timeAccessed}</p>
        <div className="item-info-cont">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDelete}
        >
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="logo"
          />
        </button>
      </li>
    )
  }
}

export default HistorySearch
