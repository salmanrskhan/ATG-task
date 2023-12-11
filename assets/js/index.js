let signup = document.querySelector(".sign-up-page-section")
let signin = document.querySelector(".sign-in-page-section")
let nologin = document.querySelector(".onclick-login-hide")
let login = document.querySelector(".onclick-login-show")



const gotosignin = () => {
    signup.style.display = "none";
    signin.style.display = "flex"
}
const gotosignup = () => {
    signup.style.display = "flex";
    signin.style.display = "none"
}

const createaccountIn = (e) => {
    // e.preventDefault();
    // nologin.style.display = "none";
    // login.style.display = "flex"
    // console.log("submint loginin")
    // window.location.href = "../loginpage.html";

}

function gotonext() {
    window.location.href = "../loginpage.html";
}
const createaccountup = (e) => {
    e.preventDefault();
    gotosignin()

}
const hideSignup = () => {
    signup.style.display == "flex" ? signup.style.display = "none" : signup.style.display = "flex"


}
const hideSignin = () => {
    signin.style.display == "flex" ? signin.style.display = "none" : signin.style.display = "flex"
}



// Added ----------


const threeDotsBtns = document.querySelectorAll('.three-dotes button');

threeDotsBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.style.backgroundColor = button.style.backgroundColor === '#BFBFC0' ? '' : '#BFBFC0';
    });
});

document.addEventListener('click', (event) => {
    const isOutsideButtons = Array.from(threeDotsBtns).every(button => !button.contains(event.target));
    if (isOutsideButtons) {
        threeDotsBtns.forEach(button => {
            button.style.backgroundColor = '';
        });
    }
});

