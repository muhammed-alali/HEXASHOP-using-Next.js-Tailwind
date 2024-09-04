import Image from "next/image"
import styles from "./footer.module.css"
import {socia_media} from "./data"
export default function Footer() {
  return (
    <div className={styles.container}>
       <div>Copyright © 2023 Hacks®. All Rights Reserved.</div>

       <div className={styles.social}>

        {socia_media.map((media) =>(
          <Image 
          key={media.id}
          className={styles.icon}
           src={`/images/icons/${media.name}.png`}
           alt="hexashop ${media.name} link"
           width={20}
           height={20}
          />
        )
          )}

       </div>
    </div>
  )
}
