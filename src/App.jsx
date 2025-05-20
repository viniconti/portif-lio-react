import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* NAVBAR */}
        <nav>
        <div className="left">
          <a href="/">Vinicius Conti</a>
        </div>

        <div className="right">
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>

          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            <span>Linkedin</span>
          </a>

          <a href="mailto:vinicius.sconti@eaportal.org">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </nav>

      <main>
        {/* SECTION 1: Hero */}
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

        {/* SECTION 2: Skills */}
        <section id="skills" className="skills-section">
          <h2 className="h2-skills">Habilidades</h2>
          <div className="text">
            Tenho conhecimento básico em HTML e CSS, e estou começando minha jornada no mundo do React e do Node.js, a vontade de aprender é grande!
            Também, já tive contato com JavaScript, embora meu conhecimento ainda seja superficial.
            Estou constantemente estudando e praticando para me tornar um desenvolvedor web cada vez mais completo!
          </div>

          <div className="cells">
            <div className="cell">
              <img src="./imagens/icons8-html-5-48.png" alt="Html logo" />
              <span>Html</span>
            </div>

            <div className="cell">
              <img src="./imagens/css-3.png" alt="Css logo" />
              <span>Css</span>
            </div>

            <div className="cell">
              <img src="./imagens/icons8-javascript-48.png" alt="JavaScript logo" />
              <span>JavaScript</span>
            </div>

            <div className="cell">
              <img src="./imagens/icons8-nó-js-48.png" alt="Node logo" />
              <span>Node.js</span>
            </div>

            <div className="cell">
              <img src="./imagens/1174949_js_react js_logo_react_react native_icon" alt="React logo" />
              <span>React</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Contact */}
        <section id="contact" className="contact-section">
          <h2>Contact</h2>

          <div className="group">
            <div className="text">
              Se você chegou até aqui, já conhece um pouco mais sobre mim e minhas habilidades!
              Caso tenha se interessado pelo meu perfil e queira contar comigo para algum projeto ou trabalho,
              ficarei muito feliz em conversar.
              Estou disponível para oportunidades e desafios que me ajudem a crescer profissionalmente.
            </div>

            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" />

              <label htmlFor="message">Message</label>
              <textarea id="message" cols="30" rows="10"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
