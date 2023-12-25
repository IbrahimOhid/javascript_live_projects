const posts = [
    {
        title: 'This is Title 1',
        body: 'This is Body 1'
    },
    {
        title: 'This is Title 2',
        body: 'This is Body 2'
    },
    {
        title: 'This is Title 3',
        body: 'This is Body 3'
    },
    {
        title: 'This is Title 4',
        body: 'This is Body 4'
    },
    {
        title: 'This is Title 5',
        body: 'This is Body 5'
    },
]

const postsElement = document.querySelectorAll('posts')

const loadAllPosts = () => {
    posts.map((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    })
    
}

loadAllPosts();