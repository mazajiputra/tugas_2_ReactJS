import logo from './logo.svg';
import './App.css';
import Header from './Page/Header';
import MenuUtama from './Page/MenuUtama';
import MenuTentangKami from './Page/MenuTentangKami'
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';
import Footer from './Page/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuUtama />
      <MenuMakanan />


      <MenuTentangKami />
      <MenuKontak />
      <Footer/>

    </div>
  );
}

export default App;
