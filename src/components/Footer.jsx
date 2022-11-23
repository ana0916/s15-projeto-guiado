
import styles from '../styles/components/footer.module.css'

export function Footer(props) {
  return(
    <div className={styles.footerContainer}>
     <p className={styles.footerText}>{props.text}</p>     
    </div>
  )
}
