import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../context/User';
import { Follower } from '../../context/Follower';
import axios from 'axios';

import { MainContainer } from './styles';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FiLogOut, FiHome, FiGithub } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';


const Followers = () => {
  const { push, goBack } = useHistory();
  const [followersList, setFollowersList] = useState([]);
  const { user } = useContext(User);
  const { follower, setFollower } = useContext(Follower);

  const handleFollower = (url) => {
      axios.get(`${url}`).then(({ data }) => {
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
        localStorage.setItem('follower', JSON.stringify(temp));
        setFollower(temp);
      }).catch((error) => {
        console.log(error);
      });
  }
  
  console.log(user);

  useEffect(() => {
    axios.get(`${user.followers_url}`).then(({ data }) => {setFollowersList(data)})
  }, [])

  console.log(followersList);

  return (
    <MainContainer>
        <div id="content">
            <div id="header" onClick={() => {goBack()}}>
                <AiOutlineArrowLeft size="25" id="arrow-left" color="white"/>
                <span>{user.followers} seguidores</span>
            </div>

            <div id="followers-container">

                {followersList.map((follower, index) => (
                    <div key={follower.id} className="follower-card" onClick={() => {handleFollower(follower.url)}}>
                        <img src={follower.avatar_url} alt="avatar" />
                        <span>#{follower.login}</span>
                        <AiOutlineArrowRight id="arrow-right" size="20"/>
                    </div>
                ))}
                
            </div>
        </div>

        <div id="footer-menu">
            <div className="footer-item">
                <FiHome size="25" className="icon" onClick={() => {push('/dashboard')}}/>
                <span>Home</span>
            </div>
            <div className="footer-item" onClick={() => {push('/repos')}}>
                <FiGithub size="25" className="icon"/>
                <span>Repos</span>
            </div>
            <div id="actual" className="footer-item" onClick={() => {push('/followers')}}>
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

export default Followers;