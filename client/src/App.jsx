import './App.css'
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
      {/* <Navbar /> */}
      <Header />
      <OurStory />
      <ReadyQuality/>
      <PersonalizedService/>
      <NumberBox/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
