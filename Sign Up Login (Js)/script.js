

const signup=()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    if(username === "" || password === "" || email === ""){
        alert("Please fill in all fields.");
        return;
    }
   let user1={
    username:username,
    password:password,
    email:email,
   }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);
    if(userExists){
        alert("Username already exists.");
        return;
    }
    users.push(user1);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
}
const login=()=>{
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    if(email === "" || password === ""){
        alert("Please fill in all fields.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);
   console.log(localStorage.getItem("users"))
    if(user){
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}