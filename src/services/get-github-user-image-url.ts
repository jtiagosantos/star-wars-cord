export async function getGithubUserImageUrlService(username: string) {
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

    const userImageUrl = `https://github.com/${username}.png`;

    return userImageUrl;
  } catch (error: any) {
    throw new Error(error.message);
  }
}