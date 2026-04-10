document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const fetchReposButton = document.getElementById('fetchRepos');
    const enhanceReadmeButton = document.getElementById('enhanceReadme');
    const reposContainer = document.getElementById('reposContainer');
    const enhancedReadmeContainer = document.getElementById('enhancedReadmeContainer');

    let repositories = [];

    async function fetchRepositories(username) {
        try {
            const response = await axios.get(`/api/repos/${username}`);
            repositories = response.data;
            renderRepos(repositories);
        } catch (error) {
            displayError(error.message);
        }
    }

    function renderRepos(repos) {
        reposContainer.innerHTML = '';
        if (repos.length === 0) {
            reposContainer.innerHTML = '<p>No repositories found.</p>';
        } else {
            repos.forEach(repo => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <a href="${repo.url}" target="_blank">${repo.url}</a>
                    <p>${repo.description}</p>
                    <span>Stars: ${repo.stargazers_count}</span>
                    <span>Forks: ${repo.forks_count}</span>
                `;
                reposContainer.appendChild(card);
            });
        }
    }

    async function enhanceReadme() {
        try {
            const response = await axios.post('/api/enhance-readme', { repositories });
            enhancedReadmeContainer.innerHTML = `
                <pre><code>${response.data}</code></pre>
            `;
        } catch (error) {
            displayError(error.message);
        }
    }

    function displayError(message) {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = message;
        enhancedReadmeContainer.innerHTML = '';
        enhancedReadmeContainer.appendChild(errorElement);
    }

    fetchReposButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            fetchRepositories(username);
        } else {
            displayError('Please enter a GitHub username.');
        }
    });

    enhanceReadmeButton.addEventListener('click', () => {
        if (repositories.length > 0) {
            enhanceReadme();
        } else {
            displayError('No repositories to enhance README for.');
        }
    });
});