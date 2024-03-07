import Header from "./../../components"
import Banner from"../../layout/banner/Banner"
import ApartmentGrid from "./../../components/apartmentGrid/ApartmentGrid"
import Main from "./../../layout/main/Main"
import Footer from "../../layout/footer/Footer"

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