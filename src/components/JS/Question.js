import '../SCSS/Question.scss'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

const Question = ({ title, question, question2 }) => {
  const [faq, setFaq] = useState(false)

  return (
    <div className='question__content'>
      <div className='question__header' onClick={() => setFaq(faq => !faq)}>
        <h3>{title}</h3>
        {faq ? <CloseIcon /> : <AddIcon />}
      </div>
      {faq &&
        <div className="questions">
          <p>{question}</p>
          <p>{question2}</p>
        </div>
      }
    </div>
  )
}

export default Question
