import MoviesRow from '../components/JS/MoviesRow'
import BrowseHeader from '../components/JS/BrowseHeader'
import Banner from '../components/JS/Banner'
import { requests } from '../requests/requests'

const Browse = () => {
  return (
    <>
      <BrowseHeader />
      <Banner />
      <section style={{ padding: '1rem 2rem', marginTop: '1rem' }}>
        <MoviesRow title="Trending" fetchUrl={requests.fetchTrending} />
        <MoviesRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MoviesRow title="Action" fetchUrl={requests.fetchAction} />
        <MoviesRow title="Comedy" fetchUrl={requests.fetchComedy} />
        <MoviesRow title="Horror" fetchUrl={requests.fetchHorror} />
        <MoviesRow title="Romance" fetchUrl={requests.fetchRomance} />
        <MoviesRow title="Documentarys" fetchUrl={requests.fetchDocumentarys} />
      </section>
    </>
  )
}

export default Browse
