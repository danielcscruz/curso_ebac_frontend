document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repo = document.getElementById('repo');
    const flwr = document.getElementById('flwr');
    const flwng = document.getElementById('flwng');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/danielcscruz')
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            name.innerHTML = json.name;
            username.innerHTML = json.login;
            avatar.src = json.avatar_url;
            repo.innerHTML = json.public_repos;
            flwr.innerHTML = json.followers;
            flwng.innerHTML = json.following;
            link.href = json.html_url;
        })
        .catch(function(error){
            console.error('Error:', error);
        });
})