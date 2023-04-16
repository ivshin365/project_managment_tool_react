import '../styles/globals.css'
import AppBar from '../components/AppBar'
import NavBar from '../components/NavBar'


export default function App({ Component, pageProps }) {
  return (
  <div>
   
  <Component {...pageProps} />

  </div>
  )
}
