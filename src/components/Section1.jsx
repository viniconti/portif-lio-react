import React from 'react'
import './Section1.css'


function Section1() {
    return (
        <>
         <section className="hero-section">
          <div className="text">
            <h2>Olá, eu sou Vinicius Conti 👋</h2>
            <p>
              Olá! Me chamo Vinicius Conti, tenho 16 anos e atualmente estou no 2º ano do Ensino Médio.
              Sou estudante da FAP, onde faço uma extensão focada em Desenvolvimento de Software.
              Moro em Ivatuba - PR, junto com meus pais, e estou dando os primeiros passos no mundo da programação web,
              uma área que tem me despertado cada vez mais interesse. Estou sempre em busca de aprender,
              evoluir e transformar ideias em projetos reais!
            </p>

            <div className="links">
              <a href="#skills">
                <i className="fa-solid fa-code"></i>
                <span>Skills</span>
              </a>

              <a href="#contact">
                <i className="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="headshot">
            <img src="./imagens/WhatsApp Image 2025-05-14 at 7.53.58 PM.jpeg" alt="Vinicius Conti" />
          </div>
        </section>
        </>
    )
}
export default Section1