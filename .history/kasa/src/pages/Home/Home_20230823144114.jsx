import Header from "./../../components/header/Header"
import Banner from"../../layout/banner/Banner"
import ApartmentGrid from "./../../components/apartmentGrid/ApartmentGrid"
import Main from "./../../components/main/Main"
import Footer from "./../../

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