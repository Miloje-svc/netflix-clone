import '../SCSS/Banner.scss'
import { banner } from '../../data/banner'

const Banner = () => {
  const randomNum = Math.floor(Math.random() * banner.length)
  return (
    <section className="banner">
      {banner.length !== 0 ? (
        <>
          <img style={{ width: '100%', height: '80vh', objectFit: 'cover' }}
            src={banner[randomNum].image} alt="" />
          <div className="banner__info">
            <h1>{banner[randomNum].title}</h1>
            <p>{banner[randomNum].description}</p>
            <button className="play__btn">Play</button>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default Banner