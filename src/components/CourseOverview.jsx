import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseOverview = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      // Simula a busca de dados do backend para um curso específico
      // Em uma aplicação real, você faria uma chamada de API aqui
      // Ex: const response = await fetch(`/api/courses/${courseId}`);
      // const data = await response.json();

      // Dados simulados
      const simulatedCourses = {
        'frontend-ia': {
          id: 'frontend-ia',
          title: 'Desenvolvedor Front-end com IA: do Zero ao Emprego',
          description: 'Este curso abrangente cobre desde os fundamentos do desenvolvimento web até a integração de inteligência artificial em aplicações front-end, preparando você para o mercado de trabalho.',
          modules: [
            { id: 'mod1', title: 'Módulo 1: Fundamentos do Desenvolvimento Web', lessons: 10, completed: 5 },
            { id: 'mod2', title: 'Módulo 2: JavaScript Avançado e Ecossistema Front-end', lessons: 12, completed: 3 },
            { id: 'mod3', title: 'Módulo 3: Front-end e Inteligência Artificial', lessons: 8, completed: 0 },
            { id: 'mod4', title: 'Módulo 4: Preparação para o Mercado de Trabalho', lessons: 5, completed: 0 },
          ],
        },
        'react-avancado': {
          id: 'react-avancado',
          title: 'React Avançado e Ecossistema',
          description: 'Aprofunde seus conhecimentos em React, aprendendo sobre gerenciamento de estado, hooks personalizados, performance e testes.',
          modules: [
            { id: 'mod5', title: 'Módulo 1: Gerenciamento de Estado com Context API e Redux', lessons: 7, completed: 2 },
            { id: 'mod6', title: 'Módulo 2: Hooks Personalizados e Performance', lessons: 6, completed: 0 },
          ],
        },
        'python-ia': {
          id: 'python-ia',
          title: 'Introdução à IA com Python',
          description: 'Explore os conceitos fundamentais de Inteligência Artificial e Machine Learning usando Python e suas principais bibliotecas.',
          modules: [
            { id: 'mod7', title: 'Módulo 1: Fundamentos de Python para IA', lessons: 8, completed: 0 },
            { id: 'mod8', title: 'Módulo 2: Introdução a Machine Learning', lessons: 10, completed: 0 },
          ],
        },
      };

      setCourse(simulatedCourses[courseId]);
      setLoading(false);
    };

    fetchCourseData();
  }, [courseId]);

  if (loading) {
    return <p>Carregando curso...</p>;
  }

  if (!course) {
    return <p>Curso não encontrado.</p>;
  }

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Módulos</h2>
      <div className="module-list">
        {course.modules.map((module) => (
          <div key={module.id} className="module-item">
            <h3>{module.title}</h3>
            <p>{module.completed} de {module.lessons} aulas concluídas</p>
            <Link to={`/course/${courseId}/module/${module.id}`}>
              <button>Ver Módulo</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverview;
