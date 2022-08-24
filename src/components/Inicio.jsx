const Inicio = () => {
    return (
      <div style={styles}>
        <h1>Thinkgeekfake</h1>
        <h4>Nosotros buscamos constantemente ampliar nuestro catalogo de cuadros, si tienen ideas para desarrollar cuadros manden un mail y lo agregaremos!</h4>
        <h5>Contacto</h5>
        <a href="https://github.com/MarianoMoyano" target="_blank"  rel="noreferrer">
          <img src="https://cx5v8.csb.app/iconos/github-modo-claro.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/mariano-moyano-/" target="_blank" rel="noreferrer">
          <img src="https://cx5v8.csb.app/iconos/linkedin.svg" alt="linkedin" />
        </a>
        <a href="mailto:marianolmoyano@gmail.com" target="_blank"  rel="noreferrer">
          <img src="https://cx5v8.csb.app/iconos/gmail.svg" alt="mail"/>
        </a>
      </div>
    )
  }
 
  const styles = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  }
  
  export default Inicio