const body = document.getElementsByTagName("body")[0]

const loadData = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = data.json();
    return users;
}

window.addEventListener("load", async () => {
    try{
    const users = await loadData();
    const ul = document.createElement("ul");
    ul.setAttribute("id", "user-container");
    for(user of users) {
        const li = document.createElement("li")
        li.innerHTML = `<span>${user.name}</span><span>${user.email}</span><button class="button" id=${user.id}>See more</button>`;
        ul.appendChild(li);
    }
    body.appendChild(ul);
    } catch(e) {
        console.log(e);
    }
});

const postLoaded = async(id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const posts = data.json();
    return posts
}

const loadPostsOnDom = (posts) => {
    const anchor = document.createElement('a');
    anchor.setAttribute("href", "./index.html");
    anchor.textContent = "Back"
    body.appendChild(anchor);
    const ul = document.createElement("ul");
    for(post of posts) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${post.title}</span><span>${post.body}</span>`;
        ul.appendChild(li);
    }
    body.appendChild(ul);
}

body.addEventListener("click", async (e) => {
    if(e.target.className == "button") {
        const posts = await postLoaded(e.target.id);
        document.querySelector("#user-container").remove();
        loadPostsOnDom(posts)
    }
})