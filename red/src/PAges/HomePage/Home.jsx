
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import TitleSection from '../../components/Title Section/TitleSection'
import Slider from '../../components/Slider/Slider'




export default function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero/>
      <TitleSection Title={"Trending"}/>
      <Slider/>
      

    </div>
  )
}
