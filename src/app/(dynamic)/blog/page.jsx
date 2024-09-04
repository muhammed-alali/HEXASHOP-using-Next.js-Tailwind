import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  return res.json()
}

export default async function Blog() {
  const data = await getData()
  const products = data.products
  
  return (
  <>
    <div className={styles.mainContainer}>
  
      {products.map((product) => (

     <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
     <div className={styles.imageContainer}>
       <Image 
       className={styles.image}
         src={product.thumbnail}
         alt="post image"
         width={350}
         height={250}
       />
     </div>
       <div className={styles.contact}>
           <h1 className={styles.title}>{product.title}</h1>
           <p className={styles.text}>{product.description}</p>
       </div>
       </Link>
      )
      )}
   
    </div>
  </>
  )
}
