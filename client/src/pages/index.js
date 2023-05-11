import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from './home'
import Login from './login'
import Navbar from '../components/Nav'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })
const Main = () => {
  const { token } = useSelector(state => state.user)
 
  return (
    <div>
      <Navbar/>
      {token ? <Home/> : <Auth/>}
    </div>
  )
}


export default Main;
