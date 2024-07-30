import styles from "./Contactheader.module.css"


const Contactheader = () => {
    return(
        <div className={`container ${styles.contactsection}`}>
            <h1>CONTACT AS</h1>
            <p>
            LET'S CHAT: WE WOULD BE GLAD TO HEAR FROM YOU AND ARE HERE TO ASSIST! 
            Contact us using this page's contact form, via phone, email, or social media, if you have any questions, comments, or just want to talk. 
            </p>
        </div>
    )
}


export default Contactheader;