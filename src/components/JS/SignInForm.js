import '../SCSS/Form.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { auth } from '../../firebase/firebase'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState("password")

  const isInvalid = email === "" || password === "" || password.length < 8

  const submit = e => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
      .catch(err => console.error(err.message))

    // setEmail('')
    // setPassword('')
  }

  return (
    <section className="form">
      <div className="form__container">

        <h1 className="title">Sign In</h1>

        <form onSubmit={submit}>
          <div>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              type="text" />
          </div>
          <div>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type={showPassword} />
            {showPassword === "password" ?
              (<VisibilityOffIcon
                onClick={() => setShowPassword("text")} />) :
              (<VisibilityIcon
                onClick={() => setShowPassword("password")} />)}
          </div>
          <button disabled={isInvalid} type="submit">Sign In</button>
        </form>
        <div className="remember__container">
          <div>
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <h4>Need help?</h4>
        </div>
        <div className="fb__link">
          <img style={{ width: '20px', height: '20px' }} src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png" alt="" />
          <p>Login with Facebook</p>
        </div>
        <div className="signUp__container">
          <p>New to Netflix? <Link
            style={{
              color: 'white',
              marginLeft: '0.3rem',
              textDecoration: 'none'
            }}
            to={routes.SIGNUP}>Sign Up Now</Link></p>
        </div>
        <p className="learn__more">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </section>
  )
}

export default SignInForm
