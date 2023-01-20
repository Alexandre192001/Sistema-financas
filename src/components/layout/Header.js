import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <>
    <header class={styles.container_header} id="header">
      <img src='https://blobportais.paranabanco.com.br/portalinvestimentos/2021/12/parana-banco-post_14-1.jpg' alt='img-header'></img>
      <h1>Sistema de finanças</h1>
      <a className={styles.btn_saiba_header} href='#main'>Saiba mais</a>
    </header>
    </>
    
  )
}

export default Header