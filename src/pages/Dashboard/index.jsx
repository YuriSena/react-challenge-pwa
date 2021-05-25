import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../context/User';
import { Follower } from '../../context/Follower';

import { MainContainer } from './styles';

import { FiLogOut, FiHome, FiGithub } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';

// import { Container } from './styles';

function Dashboard() {
  const history = useHistory();
  const { user, setUser } = useContext(User);
	const { follower, setFollower } = useContext(Follower);
	const [followerName, setFollowerName] = useState("SEM NOME");
  console.log(user);

  const handleLogout = () => {
      history.push('/');
      localStorage.clear();
			setUser(null);
  }

	const handleSave = () => {
		setUser(follower);
		setFollower(false);
}

	useEffect(() => {
    if(follower && follower.name) {
			setFollowerName(follower.name);
		}else if(user && user.name){
			setFollowerName(user.name);
		}else {
			setFollowerName("SEM NOME");
		}
  }, [follower]);

  return (
      <MainContainer>
        <div id="content">
            <div id="header-container">
                <span>#{follower ? follower.login : user.login}</span>
                <div id="logout-container" 
                onClick={() => {
									follower ? handleSave() :
									handleLogout()}}>
                    <span>{follower ? "Salvar" : "Sair"}</span>
                    <FiLogOut size="20" color={follower ? "#5CBC29" : "#D03434"}/>
                </div>
            </div>

            <img src={follower ? follower.avatar_url : user.avatar_url} alt="avatar" />
            
            <div id="user-contact-container">
                <h2>{followerName.toUpperCase()}</h2>
                <span>{follower ? follower.email : user.email ? user.email : "email privado"}</span>
                <span>{follower ? follower.location : user.location}</span>
            </div>

            <div id="numbers-container">
                <div className="numbers-info">
                    <span className="number">{follower ? follower.followers : user.followers}</span>
                    <span className="text">Seguidores</span>
                </div>
                <div className="numbers-info">
                    <span className="number">{follower ? follower.following : user.following}</span>
                    <span className="text">Seguindo</span>
                </div>
                <div className="numbers-info">
                    <span className="number">{follower ? follower.public_repos : user.public_repos}</span>
                    <span className="text">Repos</span>
                </div>
            </div>

						<div id="bio-container">
							<h2>BIO</h2>
							<p>{follower ? follower.bio : user.bio}</p>
						</div>
        </div>
				
				<div id="footer-menu">
					<div id="actual" className="footer-item">
						<FiHome size="25" className="icon"/>
						<span>Home</span>
					</div>
					<div className="footer-item" onClick={() => {history.push('/repos')}}>
						<FiGithub size="25" className="icon"/>
						<span>Repos</span>
					</div>
					<div className="footer-item" onClick={() => {history.push('/followers')}}>
						<IoMdPeople size="25" className="icon"/>
						<span>Seguidores</span>
					</div>
					<div className="footer-item" onClick={() => {history.push('/following')}}>
						<IoMdPeople size="25" className="icon"/>
						<span>Seguindo</span>
					</div>
				</div>

      </MainContainer>
  );
}

export default Dashboard;