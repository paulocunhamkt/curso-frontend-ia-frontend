import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Certificates = () => {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      // Simula a busca de certificados do backend
      // Em uma aplicação real, você faria uma chamada de API aqui
      // Ex: const response = await fetch(`/api/users/${user.id}/certificates`);
      // const data = await response.json();

      // Dados simulados
      const simulatedCertificates = [
        {
          id: 'cert1',
          courseName: 'Desenvolvedor Front-end com IA',
          issueDate: '2025-07-18',
          certificateUrl: 'https://example.com/certificate/frontend-ia-demo.pdf', // URL simulada
        },
        {
          id: 'cert2',
          courseName: 'Fundamentos de HTML e CSS',
          issueDate: '2025-06-20',
          certificateUrl: 'https://example.com/certificate/html-css-demo.pdf', // URL simulada
        },
      ];

      setCertificates(simulatedCertificates );
      setLoading(false);
    };

    if (user) {
      fetchCertificates();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <p>Carregando certificados...</p>;
  }

  if (!user) {
    return <p>Por favor, faça login para ver seus certificados.</p>;
  }

  return (
    <div className="certificates-container">
      <h1>Meus Certificados</h1>
      {certificates.length > 0 ? (
        certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h3>{cert.courseName}</h3>
            <p>Data de Emissão: {cert.issueDate}</p>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: '1rem' }}>Visualizar Certificado</button>
            </a>
          </div>
        ))
      ) : (
        <p>Você ainda não possui certificados. Conclua um curso para ganhar o seu!</p>
      )}
    </div>
  );
};

export default Certificates;
