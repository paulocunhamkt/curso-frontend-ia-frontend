import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, loading } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Simula a atualização do perfil no backend
    // Em uma aplicação real, você faria uma chamada de API aqui
    // Ex: const response = await fetch(`/api/users/${user.id}/profile`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(profileData),
    // });
    // const data = await response.json();

    // Simulação de sucesso/erro
    const success = true; // Altere para false para simular um erro

    if (success) {
      // Atualiza o usuário no contexto de autenticação (se houver uma função para isso)
      // Por exemplo, se useAuth tivesse uma função `updateUser(newUserData)`
      // updateUser({ ...user, ...profileData });
      setMessage('Perfil atualizado com sucesso!');
    } else {
      setMessage('Erro ao atualizar perfil. Tente novamente.');
    }
  };

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  if (!user) {
    return <p>Por favor, faça login para ver seu perfil.</p>;
  }

  return (
    <div className="profile-container">
      <h1>Meu Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            required
            disabled // Email geralmente não é editável diretamente
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </div>
        {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red', marginBottom: '1rem' }}>{message}</p>}
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default Profile;
