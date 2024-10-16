import './App.css'
import ExploreElegance from './Components/ExploreElegance/ExploreElegance'
import Gallery from './Components/Gallery/Gallery'
import Header from './Components/Header/Header'
import NumberBox from './Components/NumberBox/NumberBox'
import OurStory from './Components/OurStory/OurStory'
import PersonalizedService from './Components/PersonalizedService/PersonalizedService'
import ReadyQuality from './Components/ReadyQuality/ReadyQuality'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/Navbar/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <div id="About">
        <OurStory />
      </div>
      <ReadyQuality />
      <ExploreElegance />
      <div id="Service">
        <PersonalizedService />
      </div>
      <NumberBox />
      <Gallery />
      <div id="Contact">
        <Footer />
      </div>
    </>
  )
}

export default App
