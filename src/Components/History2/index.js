import {Component} from 'react'
import './index.css'

class History extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    let {initialHistoryList} = this.props
    const {searchInput} = this.state
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    const deleteUser = id => {
      const filteredList = initialHistoryList.filter(each => each.id !== id)
      initialHistoryList = filteredList
    }
    console.log(searchInput)
    return (
      <div className="main-cont">
        <div className="history-search-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search-input-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              className="history-input"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="history-items-cont">
          {searchResults.map(eachHistory => (
            <HistorySearch
              historyDetails={eachHistory}
              key={eachHistory.id}
              deleteUser={deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
