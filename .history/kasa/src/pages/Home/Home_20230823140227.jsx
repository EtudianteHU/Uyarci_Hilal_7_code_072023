import Header from "./../../components/header/Header"
import Banner from"./../../components/banner/Banner"
import ApartmentGrid from "./../../components/apartmentGrid/ApartmentGrid"
import Main from "./../../components/main/Main"
import Footer from "./../../components/footer/Footer"
import Router from "./../../router/Route"
const Home = () => {
  return (
    <div>   
    <Header/>
    <Main>
    <Banner/>
   <ApartmentGrid/>
   </Main>
   <Footer/>
   <Router
    </div>
  )
}

export default Home