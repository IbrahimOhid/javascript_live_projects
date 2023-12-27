const fetchData = async (config) => {
    try{
        const res = await axios(config)
        return res.data;
    } catch(error){
        throw Error("Data is Not Fetch");
    }

}


const postsElement = document.querySelector('.posts')

const loadAllPosts = async () => {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        postsElement.appendChild(postElement)
    })
}

loadAllPosts()




