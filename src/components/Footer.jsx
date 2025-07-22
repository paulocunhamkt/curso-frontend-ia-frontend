import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Curso Desenvolvedor Front-end com IA. Todos os direitos reservados.</p>
        <div className="social-links">
          {/* Adicione ícones de redes sociais aqui, se desejar */}
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
