import { FaRegMessage } from "react-icons/fa6";
import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
         {props.text}
         {props.icon}
    </button>
       
  )
}

export default Button;