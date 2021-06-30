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