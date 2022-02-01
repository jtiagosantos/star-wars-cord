import { GithubUser } from "../../types/github-user";

export async function getGithubUserService(username: string) {
  if (!username) {
    throw new Error('Campo usuário é obrigatório.')
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message) {
      throw new Error('Usuário inválido.');
    }

    const githubUser: GithubUser = {
      userImageUrl: `https://github.com/${username}.png`,
    }

    return githubUser;

  } catch (error: any) {
    throw new Error(error.message);
  }
}