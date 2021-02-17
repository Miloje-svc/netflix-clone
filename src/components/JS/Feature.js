import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import '../SCSS/Feature.scss'

const Feature = ({ setShowFeature, showFeature, movie }) => {
  return (
    <>
      {showFeature ? (
        <section className="feature">
          <div className="feature__content">
            <div className="feature__left">
              <h1>{movie.original_title || movie.original_name}</h1>
              <p>{movie.overview}</p>
              <button>Watch Now</button>
            </div>

            <div className="feature__middle"></div>

            <div className="feature__rigth">
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
            </div>

            <div className="feature__close--btn" onClick={() => setShowFeature(false)}>
              <CloseRoundedIcon />
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default Feature
