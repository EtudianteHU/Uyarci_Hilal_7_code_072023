import Header from "./components/header/Header"
import Banner from"./components/banner/Banner.jsx"
import Route from "./router/Route"
import "./App.css"
import ApartmentGrid from "./components/apartmentGrid/ApartmentGrid"
import Main from "./components/main/"
function App() {
  return  (  
  <div>
    <Main>
    <Header/>
    <Banner/>
   <ApartmentGrid/>
   </Main>
<Route/>
  </div>
   
  );
}

export default App;
