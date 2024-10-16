import styles from "../service/service.module.css"
import Link from "next/link"




const Service = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Service Page</h1>
      <ul> 
    
     <li><Link href='/'>Home Page</Link></li>
     <li><Link href="/service/graghic-design">Graphic Design Page</Link></li>
      <li><Link href="/service/video-editing">Video editing Page</Link></li>
      
      </ul>
    </div>
  )
}

export default Service