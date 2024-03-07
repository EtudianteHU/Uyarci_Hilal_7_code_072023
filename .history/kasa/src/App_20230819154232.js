import Header from "./components/header/Header"
import Banner from"./components/banner/Banner.jsx"
import Route from "./router/Route"
import "./App.css"
import ApartmentGrid from "./components/apartmentGrid/ApartmentGrid"
import Main from "./components/mainMain"

function App() {
  return  (  
  <div>
    <Header/>
    <Main>
    <Banner/>
   <ApartmentGrid/>
   </Main>
<Route/>
  </div>
   
  );
}

export default App;
