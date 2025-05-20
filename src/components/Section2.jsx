import React from 'react'
import './Section2.css'


function Section2() {
    return (
        <>
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

        </>
    )
}
export default Section2