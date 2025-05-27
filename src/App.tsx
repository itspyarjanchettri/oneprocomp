
import './App.css'
import { CoursesCard } from './components/CoursesCard'
// import { Hero } from './components/hero'
import { NavbarComponent } from './components/navbar'


function App() {


  return (
    <>
      <div  className="">
        <NavbarComponent/> {/*navbar*/} 
        {/* <Hero/> */}
        {/* <CardComponent/> card */}
        <CoursesCard/>
      </div>
    </>
  )
}

export default App
