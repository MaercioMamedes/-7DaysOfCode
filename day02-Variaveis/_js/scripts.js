function sendData(){
    let userName = document.querySelector("#nameUser").value;
    let userAge = document.querySelector("#ageUser").value;
    let userLang = document.querySelector("#langStudy").value;

    let output = document.querySelector("#output");
    output.innerText = ` Olá ${userName} !! Você tem apenas ${userAge}, sempre é hora de aprender algo novo. 
                        A linguagem ${userLang} é muito legal, parabéns !!`;
}

