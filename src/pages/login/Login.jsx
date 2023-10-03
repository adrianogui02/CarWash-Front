import React, { useContext, useState } from 'react';
import './login.css'
import { Link , useNavigate} from 'react-router-dom'
import SuccessPopup from '../../components/SuccessPopup/SuccessPopup'
import {AuthContext} from '../../components/AuthContext/AuthContext'; // Importe useAuth do seu contexto


const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Estado para mostrar/ocultar o popup
  // const {login}  = useAuth(); // Use o hook useAuth para acessar o contexto de autenticação
  const navigate = useNavigate(); // Use o hook useNavigate para navegar
  const context = useContext(AuthContext)
  // Função para lidar com mudanças nos campos de formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar os dados de login para a API
  const handleLogin = async (e) => {
    e.preventDefault();

    // Enviar os dados de login para a API Wallet e processar a resposta
    try {
      const response = await fetch(`http://localhost:3030/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login bem-sucedido, obter informações do usuário
        const userData = await response.json();
        // login(userData)
        context.login(userData)
        setShowSuccessPopup(true); // Exibir o popup de sucesso
        // Exemplo: redirecionar para a página de perfil
      } else {
        // Tratar erros de login, exibir mensagens de erro, etc.
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false); // Fechar o popup de sucesso
    navigate('/home'); // Redirecionar para a página de login
  };


  return (
    <div className='login section__padding'>
      <div className="login-container">
        <h1>Login</h1>
        <form className='login-writeForm' autoComplete='off' onSubmit={handleLogin}>
          <div className="login-formGroup">
            <label>Username</label>
            <input
              type="text"
              placeholder='Username'
              name="username" // Adicione o atributo 'name' para associar ao estado 'formData'
              value={formData.username} // Adicione o valor do estado 'formData'
              onChange={handleChange} // Chame a função 'handleChange' para atualizar o estado
            />
          </div>
          <div className="login-formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder='Password'
              name="password" // Adicione o atributo 'name' para associar ao estado 'formData'
              value={formData.password} // Adicione o valor do estado 'formData'
              onChange={handleChange} // Chame a função 'handleChange' para atualizar o estado
            />
          </div>
          
         <div className="login-button">
          <button className='login-writeButton' type='submit'>Login</button>
          <Link to="/register">
            <button className='login-reg-writeButton' type='submit'>Register</button>
          </Link>
         </div>
        </form>
        {showSuccessPopup && (
          <SuccessPopup
            message={`Bem-vindo, ${context.user.user.nome}`} // Mostrar a mensagem de boas-vindas com o nome do usuário
            onClose={handleCloseSuccessPopup}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
