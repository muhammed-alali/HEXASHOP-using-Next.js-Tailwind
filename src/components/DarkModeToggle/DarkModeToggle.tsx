"use client"
import { useContext } from "react"
import styles from "./DarkModeToggle.module.css"
import { ThemeContext } from "../../context/ThemeContext"
export default function DarkModeToggle() {
    const {mode, toggle} = useContext(ThemeContext)
  return (
   <div className={styles.contaner } onClick={toggle}>
    <div className={styles.icon}>🌙</div>
    <div className={styles.icon}>🌚</div>
    <div
     className={styles.stwicher} 
     style={mode === "light" ?{left: "2px"}:{right: "2px"}}
     />
   </div>
  )
}
