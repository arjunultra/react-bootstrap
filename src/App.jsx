import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ReviewCards from './components/ReviewCards';
import Advantage from './components/Advantage';
import MyFooter from './components/MyFooter';
import './custom.scss';





const App = () => {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    <div className='bg-secondary d-flex flex-column flex-md-row align-items-center justify-content-md-evenly'>
    <ReviewCards/>
    <ReviewCards/>
    <ReviewCards/>
    <ReviewCards/>
    <ReviewCards/>
    </div>
    <Advantage/>
    <MyFooter/>
    </>
  )
}

export default App