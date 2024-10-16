import styles from "../about/about.module.css"
import Link from 'next/link'


const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Page</h1>
      <ul> 
      <li><Link href='/'>HomePage</Link></li>
      <li><Link href='/contact'>ContactPage</Link></li>
     <li><Link href='/service'>ServicesPage</Link></li>
      
      </ul>
    </div>
  )
}

export default About
