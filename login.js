const d = document.querySelector("h2.calendar");
const password = document.getElementById("pwd");
const login = document.querySelector("h2.login");
const loginpassword = document.querySelector("input#login_btn");



const login_name = document.getElementById("name");
const pw = document.getElementById("pw");

function store() {
    localStorage.setItem("name",login_name.value);
    localStorage.setItem("pw", pw.value);
}

function check(event) {
    event.preventDefault(); 

    const storedName = localStorage.getItem("name");
    const storedPw = localStorage.getItem("pw");
    const userName = document.getElementById("userName");
    const userPw = document.getElementById("userPw");

    if(
        userName.value !== storedName || userPw.value !== storedPw) {
        alert("Try again!");
    }else {
        login.innerText =`안녕하세요 ${userName.value} 님`;    
}
}
loginpassword.addEventListener("click", check);


//login
