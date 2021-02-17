import '../SCSS/OptForm.scss'
import { useState } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const OptForm = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="optform">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="optform__container">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address" />
        <button>TRY 30 DAYS FREE <ChevronRightIcon /></button>
      </div>
    </section>
  )
}

export default OptForm
