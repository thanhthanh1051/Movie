import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'

function App() {

  return (
    <>
      <div className='bg-black pb-10'>
        <Header />
        <Banner />
        <MovieList title={"Phim đề cử"} />
      </div>
    </>
  )
}

export default App
