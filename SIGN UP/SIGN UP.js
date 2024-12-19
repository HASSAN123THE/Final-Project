


let input1_signup = document.getElementById("input1_signup")
let input2_signup = document.getElementById("input2_signup")
let input3_signup = document.getElementById("input3_signup")
let input4_signup = document.getElementById("input4_signup")
let input5_signup = document.getElementById("input5_signup")

let btn_signup = document.getElementById("btn")



function sign_up() {
    if (input1_signup.value.trim() === "" || input2_signup.value.trim() === "" || input3_signup.value.trim() === "" || input4_signup.value.trim() === "" || input5_signup.value.trim() === "") {
        window.alert("please fill all")
    }   
    else{
        window.location.href = "../MAIN PAGE/MAIN.HTML";
    } 
}

let log_in_btn = document.getElementById("log_in_btn")

function log_in() {
    window.location.href = "../SIGN IN/SIGN.HTML"
}




