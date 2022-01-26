import { useContext } from 'react';
import { GithubUserContext } from '../contexts/GithubUserContext';

export const useGithubUser = () => useContext(GithubUserContext);