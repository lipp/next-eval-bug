const Home = ({ x }) => (
  <h1>
    Hello, <code>eval</code> is eval {x}
  </h1>
)

Home.getInitialProps = async ctx => {
  let x
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
    x = typeof eval('require("cookies")')
  }
  return { x }
}

export default Home
