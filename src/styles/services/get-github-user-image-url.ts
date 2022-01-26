export function getGithubUserImageUrlService(username: string) {
  if (!username) {
    throw new Error('Campo usuário é obrigatório.')
  }

  if (username.length > 0 && username.length <= 2) {
    throw new Error('Usuário inválido.')
  }

  try {
    const userImageUrl = `https://github.com/${username}.png`;

    return userImageUrl;
  } catch (error: any) {
    throw new Error(error.message);
  }
}