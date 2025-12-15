import styles from './Header.module.css'

const Header = () => {
  return (

    <header className={styles.headerContainer}>
     
      <div className={styles.headerText}>
        <h1>Prueba de cambio con Docker</h1> 
        <p>Ciclos Formativos de Informática</p>
      </div>
    </header>
  )
}

export default Header