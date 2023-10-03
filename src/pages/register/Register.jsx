import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    username: '',
    email: '',
    dataNascimento: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3030/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registro bem-sucedido, você pode redirecionar para a página de login ou exibir uma mensagem de sucesso.
        console.log('Registro bem-sucedido');
      } else {
        // Trate o erro de registro, talvez exibindo uma mensagem de erro.
        console.error('Erro ao registrar o usuário');
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
    }
  };

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>Register</h1>
        <form className='register-writeForm' autoComplete='off'>
          <div className="register-formGroup">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder='Nome'
            />
          </div>
          <div className="register-formGroup">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleInputChange}
              placeholder='Sobrenome'
            />
          </div>
          <div className="register-formGroup">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder='Username'
            />
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
            />
          </div>
          <div className="register-formGroup">
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-formGroup">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Password'
            />
          </div>
          <div className="register-button">
            <button
              className='register-writeButton'
              type="button"
              onClick={handleRegister} // Chame a função de registro ao clicar no botão
            >
              Register
            </button>
            <Link to="/login">
              <button className='reg-login-writeButton'>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
