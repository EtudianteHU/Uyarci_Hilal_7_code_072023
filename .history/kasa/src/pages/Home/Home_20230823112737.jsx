import Header from "./components/header/Header"
import Banner from"./components/banner/Banner.jsx"
import Route from "./router/Route"
import "./App.css"
import ApartmentGrid from "./components/apartmentGrid/ApartmentGrid"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

const Home = () => {
  return (
    <div>  
    <Header/>
    <Main>
    <Banner/>
   <ApartmentGrid/>
   </Main>
   <Footer/>
    </div>
  )
}

export default Home