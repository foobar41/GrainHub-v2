import './App.css';
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Slider from './components/Slider/Slider'
import Shop from './components/Shop'
import Footer from './components/Footer'
import AddProduct from './components/AddProduct/AddProduct'


function App() {
  return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Shop />
        <AddProduct />
        <Footer />
      </div>
  );
}

export default App;
