import { FaRegMessage } from "react-icons/fa6";
import Button from "../Button/Button";
import styles from "./Contactform.module.css"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";



const Contactform = () => {

    const [name, setName] = useState("Haris")
    const [email, setEmail] = useState("haris@gmail.com")
    const [message, setMessage] = useState("hi i am haris")
    
    const onSubmit = (event)=>{
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setMessage(event.target[2].value);




    }

    
    return(
        <section className={styles.container}>
            <div className={styles.contact_form}>

                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<FaRegMessage fontSize="24px"/>}/>
                <Button text="VIA CALL" icon={<IoCallOutline  fontSize="24px"/>}/>
                </div>


                <Button isOutline={true}
                text="VIA EMAIL FORM" 
                icon={<MdOutlineEmail fontSize="24px"/>}
                />
                
                <form onSubmit={onSubmit}>
                    <div className={styles.form_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="8"/>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                    }}>
                    <Button text="VIA EMAIL FORM"  fontSize="24px"/>
                    </div>
                    <div>{name + "  " + email + "  " + message}</div>
                </form>
            </div>
           
            
    
            <div className={styles.image}>
                <img src="/images/help.png" alt="contact" />
            </div>

        </section>

    )
}


export default Contactform;