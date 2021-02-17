import OptForm from './OptForm'

const HomeHeader = () => {
  return (
    <>
      <h1 style={{
        fontSize: "3.125rem", color: "white",
        textAlign: "center", maxWidth: "640px",
      }}>Unlimited movies, TV shows, and more.</h1>
      <p style={{
        fontSize: "1.625rem", color: "white",
        textAlign: "center", maxWidth: "640px", margin: "1rem auto"
      }}>Watch anywhere. Cancel anytime.</p>
      <OptForm />
    </>
  )
}

export default HomeHeader
