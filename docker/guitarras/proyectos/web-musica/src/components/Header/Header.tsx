import styles from './Header.module.css'

const Header = () => {
  return (

    <header className={styles.headerContainer}>
     
      <div className={styles.headerText}>
        <h1>IES Martín García Ramos</h1> 
        <p>Ciclos Formativos de Informática</p>
      </div>
    </header>
  )
}

export default Header