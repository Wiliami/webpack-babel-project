async function getProfileUserGithub() {
    const response = await fetch('https://api.github.com/users/Wiliami')

     if(response.ok) {
        const { followers_url, avatar_url, public_repos, bio } = await response.json()

        return {
            bio,
            followers_url,
            avatar_url,
            public_repos,
        }
    } else {
        throw new Error('Erro ao buscar dados de perfil de usuário.');
    }
}


console.log(getProfileUserGithub())