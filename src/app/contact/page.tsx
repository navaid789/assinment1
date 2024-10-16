import styles from "../contact/contact.module.css"
import Link from 'next/link'


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Page</h1>
      <ul> 
      <li><Link href='/'>HomePage</Link></li>
      <li><Link href='/about'>AboutPage</Link></li>
     <li><Link href='/service'>ServicesPage</Link></li>
      
      </ul>
    </div>
  )
}

export default Contact
