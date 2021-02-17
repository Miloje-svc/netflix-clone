import '../SCSS/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Questions? Contact Us.</h1>
      <div className="footer__container">
        <div className="footer__content">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
        </div>

        <div className="footer__content">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>

        <div className="footer__content">
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Netflix Originals</li>
          </ul>
        </div>

        <div className="footer__content">
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
