document.addEventListener("DOMContentLoaded", () => {
    const wrapper=document.querySelector('.login-container');
    const buttonpop = document.querySelector('.bx.bxs-message-square-x'); 
    const regiserpop=document.getElementById("sign-up");
    const register23=document.querySelector('.form-register');
    const registerclose=document.getElementById("button");
    const loginbutton=document.getElementById("login-button");

    if (buttonpop) {
        buttonpop.addEventListener('click', () => {
            console.log("Icon clicked!");
        });
    } else {
        console.error("Element with class .bx.bxs-message-square-x not found");
    }
    buttonpop.addEventListener('click',()=>{
        wrapper.classList.remove("active")

   })
    const loginbtn=document.querySelector('.login');
    loginbtn.addEventListener('click',()=>{
        wrapper.classList.add("active")
    })
    regiserpop.addEventListener('click',()=>{
        register23.classList.add("register-active");
        wrapper.classList.remove("active")
        
    })
    registerclose.addEventListener('click',()=>{
        register23.classList.remove("register-active")
        
    })
    loginbutton.addEventListener('click',()=>{
        wrapper.classList.add("active")
        register23.classList.remove("register-active")


    })
    document.getElementById('loginButton').addEventListener('click', function() {
        const targetElement = document.getElementById('section1');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
