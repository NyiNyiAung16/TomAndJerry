const loginSpan = document.getElementsByClassName('login');
const signinSpan = document.getElementsByClassName('signin');
const flashmsg = document.getElementById('flash-message');
const logout = document.getElementById('logout');
const usernameNavbar = document.getElementById('usernameNavbar');
const logoutButton = document.getElementById('logoutButton');

//regiter form
const registerForm = document.getElementById('registerForm');
const username = document.getElementById('username');
const emailRegister = document.getElementById('emailRegister');
const passwordRegister = document.getElementById('passwordRegister');
const registerbutton = document.getElementById('registerbutton');

//login form
const loginForm = document.getElementById('loginForm');
const emailLogin = document.getElementById('emailLogin');
const passwordLoing = document.getElementById('passwordLoing');
const loginbutton = document.getElementById('loginbutton');



//toggle form
loginSpan[0].addEventListener('click', function(){
    register.classList.remove('d-block');
    register.classList.add('d-none');
    login.classList.add('d-block');
    login.classList.remove('d-none');
});

signinSpan[0].addEventListener('click', function(){
    login.classList.add('d-none');
    login.classList.remove('d-block');
    register.classList.remove('d-none');
    register.classList.add('d-block');
});


//register user store
registerForm.addEventListener('submit', async(e)=>{
    e.preventDefault();

    let id = Math.floor(Math.random()*100 + 1);
    if(username.value && emailRegister.value && passwordRegister.value){
        let registerUserData = {
            id:id,
            username:username.value,
            email:emailRegister.value,
            password:passwordRegister.value
        };
        //set item
        const response = await axios.post('http://localhost:3000/register',registerUserData,{maxRedirects:0});
        console.log(response);
        
        //flash message
        flashmsg.classList.remove('d-none');
        flashmsg.classList.add('d-block');
        setTimeout(() => {
            flashmsg.classList.remove('d-block');
            flashmsg.classList.add('d-none');
        }, 2000);
        
        //get data
        let res = await fetch('http://localhost:3000/register');
        const data =await res.json();
        console.log(data);
        
        //show logout
        logout.classList.remove('d-none');
        // usernameNavbar.innerText = registerData.username;
    }
    
    username.value = '';
    emailRegister.value = '';
    passwordRegister.value = '';

});









logoutButton.addEventListener('click', function (){
    logout.classList.add('d-none');
    register.classList.add('d-none');
    register.classList.remove('d-block');
    login.classList.add('d-block');
    login.classList.remove('d-none');
});





















// loginbutton.addEventListener('click', function (e){
//     e.preventDefault();
//     if(registerData.email === emailLogin.value && registerData.password === passwordLoing.value){
//         logout.classList.remove('d-none');
//         usernameNavbar.innerText = registerData.username;
//     }
//     emailLogin.value = '';
//     passwordLoing.value = '';
// });
