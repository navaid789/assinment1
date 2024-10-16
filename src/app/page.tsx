import Link from "next/link"


const Home = () => {
  
  return (
    <div>
      <h1>Home Page</h1>
      <ul> 
      <li><Link href='/about'>AboutPage</Link></li>
      <li><Link href='/contact'>ContactPage</Link></li>
     <li><Link href='/service'>ServicesPage</Link></li>
      
      </ul>
     </div>
  )
}

export default Home
