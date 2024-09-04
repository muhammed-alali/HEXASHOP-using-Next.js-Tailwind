import Image from "next/image";
import styles from "./page.module.css"
import Hero from "/public/images/hero.svg"
export default function Home() {
  return (
   <>
   <div className={styles.container}>
    <div className={styles.col}>
      <h1 className={styles.title}>Lorem Ipsum has been the industry </h1>
      <p className={styles.description}>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime</p>
      <button className={styles.button}>Shop Now</button>
    </div>
    <div className={styles.col}>
      <Image className={styles.img} src={Hero}  alt="" />
    </div>
   </div>
   </>
  );
}
