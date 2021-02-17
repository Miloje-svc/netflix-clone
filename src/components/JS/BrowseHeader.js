/* eslint-disable react-hooks/exhaustive-deps */
import '../SCSS/BrowseHeader.scss'
import { useState, } from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import { users } from '../../images/users'

const BrowseHeader = () => {
  // const API_KEY = "abb137f2d544f62128fd10a07ef96b12"
  // const BASE_URL = 'https://api.themoviedb.org/3'
  const [showSearch, setShowSearch] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [input, setInput] = useState('')


  const disabledBtn = input === ''
  return (
    <header className="browse__header">
      <div className="header__left">
        <img src="https://raw.githubusercontent.com/karlhadwen/netflix/71bc9bcfccb88b8ad25724b7c77015196a8bd295/src/logo.svg" alt="" />
      </div>

      {showSearch && (
        <div className="header__middle">
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Search" />
            <button disabled={disabledBtn} type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="header__right">
        <SearchRoundedIcon onClick={() => setShowSearch(show => !show)} />
        <div className="header__profile" onClick={() => setShowProfile(show => !show)}>
          <img src={users[0].img} alt="" />
          <ExpandMoreRoundedIcon />
        </div>
      </div>
    </header>
  )
}

export default BrowseHeader
