import React from 'react'
import style from './Footer.module.css'
import {FaAddressCard,FaAngleDoubleUp} from 'react-icons/fa'

function Footer() {
  return (
    <footer className={style.container_footer}>
        <h1 className={style.title_footer}>Sistema de finanças</h1>
        <nav className={style.container_redes}>
            <a href='https://portfolio-pessoal-alexandre.netlify.app/'>
                <FaAddressCard/> Voltar para o portfólio
            </a>
            <a href='#header'>
                <FaAngleDoubleUp/> Voltar para o início
            </a>
        </nav>
    </footer>
  )
}

export default Footer