/*  Functions */


function menuManager() {
    let userChoice = document.getElementsByClassName("choice");

    if(userChoice[0].checked == false && userChoice[1].checked == false){
        numberPage = userResponse.length;
        console.log(numberPage);
        choice = userResponse[userResponse.length-1];
        
        return window.alert("escolha uma das opções");
    }

    let choiceChecked = userChoice[0].checked ? userChoice[0].value : userChoice[1].value;
    console.log(userChoice);
    userResponse.push(choiceChecked);

    numberPage = userResponse.length;
    if (numberPage == 3) {
        listTechUser.push(listLanguage[userResponse[1]]);
    }

    main([numberPage, choiceChecked]);
}

function returnPage() {
    userResponse.pop()
}


/* render */

function toRenderList() {
    let technology = document.querySelector("#tech");
    let sectionList = document.querySelector(".list-tech");
    console.log(technology.value);

    console.log(typeof(technology.value)=='string')

    if (typeof(technology.value) != 'string' && listTechUser.length != 1) {
        window.alert("Campo de tecnologia está vazio!!");
        menuManager();

    } else if (technology.value.length != 0) {
        console.log(listTechUser)
        listTechUser.push(technology.value);
        console.log(listTechUser)

    }

    technology.value = '';

    let renderList = `
                        <div class="lists">    
                            <h3 class="title-list">Tecnologias a serem estudadas</h3>
                                <ol>`;

    for (let element = 0; listTechUser.length > element; element++) {
        renderList += `<li>${listTechUser[element]}</li>`;
    }

    renderList += `</ol></div> `;

    sectionList.innerHTML = renderList;



}

function toFinish() {
    let msg = document.querySelector(".msg")
    let msgDynamic = dynamicResponses();
    questioPage.innerText = "Parabéns, continue sempre estudando!!";
    inputPanel.innerHTML = "";

    if (userResponse[userResponse.length - 1] == 0) {

        msg.innerText = msgDynamic.fullStack;

    } else if (userResponse[0] == 0) {
        msg.innerText = msgDynamic.backEnd;

    } else {
        msg.innerText = msgDynamic.frontEnd;
    }
}

function main(dataPage) {
    let numberPage = dataPage[0];
    let choice = dataPage[1];
    let pages = dynamicPages();
    let dictResponses = [
        [pages.pageTwo.choice1, pages.pageTwo.choice2],
        [pages.pageTwo.choice3, pages.pageTwo.choice4],
    ];



    if (numberPage == 0) {

        questioPage.innerText = pages.pageOne.question;
        inputPanel.innerHTML = pages.pageOne.choice1 + pages.pageOne.choice2 + btnNext;

    } else if (numberPage == 1) {
        questioPage.innerText = pages.pageTwo.question;
        inputPanel.innerHTML = dictResponses[choice][0] + dictResponses[choice][1] + btnNext;

    } else if (numberPage == 2) {
        questioPage.innerText = pages.pageTree.question;
        inputPanel.innerHTML = pages.pageTree.choice1 + pages.pageTree.choice2 + btnNext;

    } else if (numberPage == 3) {
        questioPage.innerText = pages.pageFour.question;
        inputPanel.innerHTML = pages.pageFour.inputTech;
        toRenderList();
    }
}


var btnNext = `<button onclick='menuManager()'>avançar</button>`;
var inputPanel = document.querySelector(".input");
var questioPage = document.querySelector("#question");
var numberPage = 0;
var choice;
userResponse.pop()
main([numberPage, choice]);
