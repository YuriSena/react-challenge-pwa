import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../context/User';

import { MainContainer } from './styles';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FiLogOut, FiHome, FiGithub, FiUnlock, FiStar } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';
import axios from 'axios';


const Repos = () => {
    const { push, goBack } = useHistory();
    const { user } = useContext(User);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/YuriSena/repos").then(({ data }) => {
            setRepos(data);
        })
    }, [])

    return (
      <MainContainer>
          <div id="content">
            <div id="header" onClick={() => {goBack()}}>
                <AiOutlineArrowLeft size="25" id="arrow-left" color="white"/>
                <span>{user.public_repos} repositórios</span>
            </div>

            <div id="repos-container">
                {repos.map((repo, index) => (
                    <div key={repo.id} className="repo-card">
                        <h3>{repo.name}</h3>
                        <span id="description">{repo.description}</span>
                        <div id="star-container">
                            <FiStar size="20"/>
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div id="lock-container">
                            <FiUnlock size="20" color="green"/>
                        </div>
                        
                    </div>
                ))}
            </div>
          </div>

          <div id="footer-menu">
                <div className="footer-item">
                    <FiHome size="25" className="icon" onClick={() => {push('/dashboard')}}/>
                    <span>Home</span>
                </div>
                <div id="actual" className="footer-item" onClick={() => {push('/repos')}}>
                    <FiGithub size="25" className="icon"/>
                    <span>Repos</span>
                </div>
                <div className="footer-item" onClick={() => {push('/followers')}}>
                    <IoMdPeople size="25" className="icon"/>
                    <span>Seguidores</span>
                </div>
                <div className="footer-item" onClick={() => {push('/following')}}>
                    <IoMdPeople size="25" className="icon"/>
                    <span>Seguindo</span>
                </div>
            </div>
      </MainContainer>
  );
}

export default Repos;