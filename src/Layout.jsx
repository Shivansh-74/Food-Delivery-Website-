import {React,useEffect,useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Preloader from "./components/Preloader";


export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay or replace with actual data fetching
    setTimeout(() => {
        setIsLoading(false);
    }, 2000); // Replace this delay with real loading logic
}, []);

  return (
    <div>
    {isLoading && <Preloader />}
    {!isLoading && (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>
    )}
      </div>
  )
}
