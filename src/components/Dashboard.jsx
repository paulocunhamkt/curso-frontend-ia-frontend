import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    coursesCompleted: 0,
    modulesInProgress: 0,
    certificatesEarned: 0,
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      // Simula a busca de dados do backend
      // Em uma aplicação real, você faria uma chamada de API aqui
      // Ex: const response = await fetch("http://localhost:5001/api/dashboard/stats" );
      // const data = await response.json();

      // Dados simulados
      const simulatedStats = {
        coursesCompleted: 1,
        modulesInProgress: 3,
        certificatesEarned: 1,
      };

      const simulatedCourses = [
        {
          id: 'frontend-ia',
          title: 'Desenvolvedor Front-end com IA',
          progress: 75,
          link: '/course/frontend-ia',
        },
        {
          id: 'react-avancado',
          title: 'React Avançado e Ecossistema',
          progress: 30,
          link: '/course/react-avancado',
        },
        {
          id: 'python-ia',
          title: 'Introdução à IA com Python',
          progress: 0,
          link: '/course/python-ia',
        },
      ];

      setStats(simulatedStats);
      setCourses(simulatedCourses);
    };

    fetchDashboardData();
  }, []);

  if (!user) {
    return <p>Por favor, faça login para acessar o dashboard.</p>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bem-vindo(a), {user.name || user.email}!</h1>
        <Link to="/profile">
          <button>Ver Perfil</button>
        </Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>{stats.coursesCompleted}</h3>
          <p>Cursos Concluídos</p>
        </div>
        <div className="stat-card">
          <h3>{stats.modulesInProgress}</h3>
          <p>Módulos em Andamento</p>
        </div>
        <div className="stat-card">
          <h3>{stats.certificatesEarned}</h3>
          <p>Certificados Emitidos</p>
        </div>
      </div>

      <div className="course-list">
        <h2>Meus Cursos</h2>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span>{course.progress}%</span>
              <Link to={course.link}>
                <button>Continuar</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum curso em andamento. Comece a aprender agora!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
