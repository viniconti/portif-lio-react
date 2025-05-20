import React from 'react'
import './Section4.css'


function Section4() {
    return (
        <>
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
        </>
    )
}
export default Section4