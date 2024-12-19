

let input1_signin = document.getElementById("input1_signin")
let input2_signin = document.getElementById("input2_signin")

let btn_log_in = document.getElementById("btn-log-in")


function log_out() {
        if (input1_signin.value.trim() === "" || input2_signin.value.trim() === "") {
            window.alert("please fill all")
        }   
        else{
            window.location.href = "../MAIN PAGE/MAIN.HTML";
    }
}

function sign_up() {
    window.location.href = "../SIGN UP/SIGN UP.html"
}

const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

   