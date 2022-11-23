import styles from '../styles/components/main.module.css'

export function Main(props) {
    return(
      <div className={styles.mainContainer}>
       <h1 className={styles.mainTitle}>{props.title}</h1>
       <a href={props.contactHref}>{props.contactTitle}</a> 
      </div>
    )
  }
  