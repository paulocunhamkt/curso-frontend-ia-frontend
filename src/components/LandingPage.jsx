import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container">
          <h1>Desenvolvedor Front-end com IA</h1>
          <h2>Do Zero ao Emprego aos 49 Anos!</h2>
          <p>
            Um curso completo e prático para quem quer iniciar uma nova carreira em tecnologia. 
            Aprenda HTML, CSS, JavaScript, React e como integrar Inteligência Artificial em seus projetos.
            Especialmente desenvolvido para profissionais maduros que buscam uma transição de carreira.
          </p>
          <div className="landing-buttons">
            <Link to="/register">
              <button style={{ marginRight: '10px', padding: '15px 30px', fontSize: '18px' }}>
                Começar Agora
              </button>
            </Link>
            <Link to="/login">
              <button style={{ 
                backgroundColor: 'transparent', 
                border: '2px solid #007bff', 
                color: '#007bff',
                padding: '15px 30px',
                fontSize: '18px'
              }}>
                Ver Conteúdo do Curso
              </button>
            </Link>
          </div>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            <strong>Credenciais de demonstração:</strong><br />
            Email: demo@frontendIA.com | Senha: demo123
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="landing-section">
        <div className="container">
          <h2>Por que escolher nosso curso?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>🎯 Foco na Empregabilidade</h3>
              <p>Metodologia voltada para o mercado de trabalho, com projetos reais e portfólio profissional.</p>
            </div>
            <div className="feature-item">
              <h3>🤖 Integração com IA</h3>
              <p>Aprenda a usar ferramentas de IA para acelerar seu desenvolvimento e se destacar no mercado.</p>
            </div>
            <div className="feature-item">
              <h3>👨‍💼 Para Profissionais 50+</h3>
              <p>Metodologia adaptada para adultos, com suporte especializado para transição de carreira.</p>
            </div>
            <div className="feature-item">
              <h3>📚 Conteúdo Atualizado</h3>
              <p>Tecnologias mais demandadas em 2025: React, TypeScript, APIs modernas e ferramentas de IA.</p>
            </div>
            <div className="feature-item">
              <h3>🏆 Certificado Reconhecido</h3>
              <p>Certificado de conclusão para adicionar ao seu LinkedIn e currículo.</p>
            </div>
            <div className="feature-item">
              <h3>💼 Preparação para Entrevistas</h3>
              <p>Simulações de entrevistas técnicas e dicas para se destacar no processo seletivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="landing-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>Conteúdo do Curso</h2>
          <div className="content-grid">
            <div className="content-item">
              <h3>Módulo 1: Fundamentos</h3>
              <p>HTML5, CSS3, JavaScript ES6+, Git e ferramentas de desenvolvimento.</p>
            </div>
            <div className="content-item">
              <h3>Módulo 2: JavaScript Avançado</h3>
              <p>React, APIs, gerenciamento de estado e boas práticas de desenvolvimento.</p>
            </div>
            <div className="content-item">
              <h3>Módulo 3: IA no Frontend</h3>
              <p>TensorFlow.js, APIs de IA, chatbots e automação com inteligência artificial.</p>
            </div>
            <div className="content-item">
              <h3>Módulo 4: Carreira</h3>
              <p>Portfólio, LinkedIn, networking e preparação para entrevistas técnicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="landing-section">
        <div className="container">
          <h2>Histórias de Sucesso</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Maria, 52 anos</h3>
              <p>"Depois de 25 anos como contadora, consegui minha primeira vaga como desenvolvedora front-end. O curso me deu toda a base necessária!"</p>
            </div>
            <div className="feature-item">
              <h3>João, 47 anos</h3>
              <p>"A metodologia adaptada para adultos fez toda a diferença. Em 6 meses estava trabalhando em uma startup!"</p>
            </div>
            <div className="feature-item">
              <h3>Ana, 55 anos</h3>
              <p>"Nunca pensei que conseguiria aprender programação. Hoje trabalho remotamente e tenho mais qualidade de vida."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-section" style={{ backgroundColor: '#007bff', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Pronto para Começar?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>
            Junte-se a centenas de profissionais que já transformaram suas carreiras!
          </p>
          <Link to="/register">
            <button style={{ 
              backgroundColor: 'white', 
              color: '#007bff',
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Inscrever-se Agora
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
