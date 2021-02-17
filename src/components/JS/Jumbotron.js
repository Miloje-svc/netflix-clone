import '../SCSS/Jumbotron.scss'
import jumbotron from '../../data/jumbotron'

const Jumbotron = () => {
  return (
    <section className="jumbotron">
      {jumbotron.map(item => (
        <div key={item.id} className="jumbotron__container">
          <div style={{ 'flexDirection': `${item.direction}` }}>
            <div className="jumbotron__image">
              <img src={item.image} alt="" />
            </div>

            <div className="jumbotron__text">
              <h1>{item.title}</h1>
              <h2>{item.subtitle}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Jumbotron
