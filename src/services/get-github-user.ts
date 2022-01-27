export interface GithubUser {
  userImageUrl: string;
}

export async function getGithubUserService(username: string) {
  if (!username) {
    throw new Error('Campo usuário é obrigatório.')
  }

  if (username.length > 0 && username.length <= 2) {
    throw new Error('Usuário inválido.')
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