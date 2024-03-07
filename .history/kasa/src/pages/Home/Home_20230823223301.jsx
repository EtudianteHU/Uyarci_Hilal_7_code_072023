import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import ApartmentGrid from './../../components/apartmentGrid/ApartmentGrid'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </div>
  )
}

export default Home
