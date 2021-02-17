import '../SCSS/Header.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

const Header = ({ btn, children }) => {
  return (
    <header className="header">
      <img className="header__bg" src="https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-bg.jpg?raw=true" alt="" />
      <div className="header__top">
        <Link to={routes.HOME}>
          <div className="header__logo">
            <img src="https://raw.githubusercontent.com/karlhadwen/netflix/71bc9bcfccb88b8ad25724b7c77015196a8bd295/src/logo.svg" alt="" />
          </div>
        </Link>

        {btn && (
          <Link to={routes.SIGNIN}>
            <div className="header__btn">
              <button>Sign In</button>
            </div>
          </Link>
        )}
      </div>

      <div className="header__children">
        {children}
      </div>
    </header>
  )
}

export default Header
