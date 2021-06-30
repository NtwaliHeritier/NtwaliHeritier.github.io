const loadData = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = data.json();
    return users;
}