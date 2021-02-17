import '../SCSS/Acordian.scss'
import faqs from '../../data/faqs'
import OptForm from './OptForm'
import Question from './Question'

const Acordian = () => {
  return (
    <section className='acordian'>
      <div className='acordian__title'>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className='questions__container'>
        {faqs.map(item => (
          <Question
            key={item.id}
            title={item.title}
            question={item.question}
            question2={item.question2} />
        ))}
      </div>
      <OptForm />
    </section>
  )
}

export default Acordian
