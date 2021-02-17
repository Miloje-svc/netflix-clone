import Jumbotron from '../components/JS/Jumbotron'
import Footer from '../components/JS/Footer'
import Acordian from '../components/JS/Acordian'
import Header from '../components/JS/Header'
import HomeHeader from '../components/JS/HomeHeader'

const Home = () => {
  return (
    <>
      <Header btn={true}>
        <HomeHeader />
      </Header>
      <Jumbotron />
      <Acordian />
      <Footer />
    </>
  )
}

export default Home
