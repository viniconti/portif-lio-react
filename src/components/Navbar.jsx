import './Navbar.css'


function Navbar() {
    return (
        <>
          <nav>
        <div className="left">
          <a href="/">Vinicius Conti</a>
        </div>

        <div className="right">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>

          <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            <span>Linkedin</span>
          </a>

          <a href="mailto:vinicius.sconti@eaportal.org">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </nav>
        </>
    )
}
export default Navbar