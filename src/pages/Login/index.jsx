import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { api } from '../../service/api';
import { MainContainer } from './styles';

import { AiOutlineGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { User } from '../../context/User';

const Login = () => {
  const [login, setLogin] = useState('');
  const { user, setUser } = useContext(User);
  const [error, setError] = useState(''); 
  const history = useHistory();

  // const handleLogin = async () => {
  //   const teste = await api.get('/users/YuriSena');
  //   console.log(teste);
  // }

  const handleValidate = () => {
    if(login != '') {
      api.get(`/users/${login}`).then(({ data }) => {
        const temp = {
          login: data.login,
          name: data.name, 
          email: data.email, 
          location: data.location, 
          company: data.company, 
          bio: data.bio, 
          avatar_url: data.avatar_url, 
          followers_url: data.followers_url,
          following_url: data.following_url, 
          organizations_url: data.organizations_url, 
          starred_url: data.starred_url, 
          public_repos: data.public_repos, 
          public_gists: data.public_gists, 
          followers: data.followers, 
          following: data.following,
          repos_url: data.repos_url
        }
        localStorage.setItem('user', JSON.stringify(temp));
        setUser(temp);
        history.push('/dashboard');
      }).catch((error) => {
        setError('usuário não encontrado');
        console.log(error);
      })
    } else {
      setError('campo obrigatório');
    }
  }

  // const handleError = () => {

  // }

  return (
    <MainContainer>
      <div id="login-container">
        <AiOutlineGithub size="100" color="#FFCE00"/>
        <div >
          <input type="text" placeholder="Usuário" name="user" value={login} onChange={(e) => {setLogin(e.target.value)}}/>
          {error ? <p>{error}</p> : ''}
          
        </div>
        <div id="button-container" onClick={handleValidate}>
          <span>ENTRAR</span>
          <AiOutlineArrowRight size="25"/>
        </div>
      </div>
    </MainContainer>
  );
}

export default Login;