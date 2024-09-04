
import Image from "next/image"
import styles from "./page.module.css"


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json()
}


export default async function Post({params}) {
  const product = await getData(params.id)
    
  
 
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            className={styles.Image}
            src={product.thumbnail}
            alt=""
            fill={true}
          />
          <span className={styles.auther}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
           {product.images.map((image) => (
            <Image key={product.id} src={image} alt={product.title} width={200} height={200}/>
           )

           )}
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis 
          temporibus perferendis ex dolor tenetur tempore enim corporis harum autem
           soluta magnam, quisquam deserunt labore. Iste quas et natus deserunt facilis 
           molestiae magnam animi, voluptatum obcaecati asperiores iure tenetur tempora
            possimus quo maiores nisi nulla itaque illo eligendi porro a.
        </p>
      </div>
    </div>
    </>
  )
}
