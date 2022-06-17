

function dynamicPages() {

    let indexPageTree = userResponse.length == 0 ? 0:userResponse[0];

    let pages = {
        pageOne: {
            question: 'Qual área de programação você deseja seguir?',
            choice1: `
                        <input type="radio" class="choice" name="language" id="back-ratio" value='0' >
                        <label for="back-ratio">
                            <figure id="back-end" >
    
                                <img src=${imageBack} alt="back-end" srcset="">
    
                                <figcaption>BACK-END</figcaption>
                    
                            </figure>
                        </label>    
                    `,

            choice2: `
                        <input type="radio" class="choice" name="language" id="front-ratio" value='1' >
                        <label for="front-ratio">
                            <figure id="front-end" >
    
                                <img src=${imageFront} alt="front-end" srcset="">
    
                                <figcaption>FRONT-END</figcaption>
                    
                            </figure>
                        </label>
            
                    `,
        },

        pageTwo: {
            question: 'Qual tecnologia você quer aprender?',
            choice1: `   
                        <input type="radio" class="choice" name="technology" id="cSharp-ratio" value='0'>
                        <label for='cSharp-ratio'>
                            <figure id="c-sharp">
                                <img src="https://www.demorodavel.com/wp-content/uploads/2019/09/csharp-e7b8fcd4ce.png" alt="c-sharp" srcset="">
                                <figcaption>C#</figcaption>
                            </figure>    
                        </label>
                    `,

            choice2: `  
                        <input type="radio" class="choice" name="technology" id="java-ratio" value="1">
                        <label for='java-ratio'>
                            <figure id="java" >
                                <img src="https://blog.consdata.tech/assets/img/posts/2019-03-22-java-darmowa-czy-nie/java-darmowa.png" alt="java" srcset="">
                                <figcaption>JAVA</figcaption>
                            </figure>           
                        </label>        
                                    
                    `,

            choice3: `  
                        <input type="radio" class="choice" name="technology" id="angular-ratio" value="2">
                        <label for='angular-ratio'>
                            <figure id="java" >
                                <img src="https://freesvg.org/img/angular.png" alt="angular">
                                <figcaption>ANGULAR</figcaption>
                            </figure>           
                        </label>        
                                    
                    `,

            choice4: `  
                        <input type="radio" class="choice" name="technology" id="react-ratio" value="3">
                        <label for='react-ratio'>
                            <figure id="react">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="react">
                                <figcaption>REACT</figcaption>
                            </figure>           
                        </label>        
                                    
                    `,
        },

        pageTree: {
            question: "Você pretende se especializar numa área ou atuar como Fullstack?",
            choice1: `   
                        <input type="radio" class="choice" name="technology" id="fullstack-ratio" value='0'>
                        <label for='fullstack-ratio'>
                            <figure id="fullstack">
                                <img src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png" alt="fullstack" srcset="">
                                <figcaption>Fullstack</figcaption>
                            </figure>    
                        </label>
                    `,

            choice2: `  
                        <input type="radio" class="choice" name="technology" id="specialist-ratio" value="1">
                        <label for='specialist-ratio'>
                            <figure id="specialist"  >
                                <img src=${listTech[indexPageTree][1]} alt="specialist" >
                                <figcaption>Especialista ${listTech[indexPageTree][0]}</figcaption>
                            </figure>           
                        </label>        
                    `,
        },

        pageFour: {
            question: "Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer?",
            inputTech: `
                        <figure class="end-page">
                            <img src="https://p0.piqsels.com/preview/1007/355/640/industry-industry-4-web-network.jpg" alt="tecnologias" />
                            <figcaption id="title-legend">Tecnologias</figcaption>
                        </figure>
                        <div class="input-tech" >
                            <label class="label-tech" for="tech">Digite aqui:</label>
                            <input class="label-tech"  type="text" name="technology" id="tech" required>
                            <button class="btn-finally" onclick="toRenderList()" >adicionar</button>
                            <button type="submit" class="btn-finally" onclick="toFinish()">Finalizar</button>
                        </div>
                    `,
        }

    };




    return pages
}


function dynamicResponses(){
    let responses = {
        backEnd:`Trabalhar com back-end requer muito estudo das regras de negócios do projeto, ótima área de atuação`,
        frontEnd:`Trabalhar com front-end requer muito estudo da identidade visual do projeto, principalmente com UX/UI`,
        fullStack:`Ser fullstack é o verdadeiro pika das galáxias`,
    }

    return responses;
}



/* data struct */

var userResponse = [];
var listTechUser = []

const imageBack = "https://cdn.pixabay.com/photo/2019/09/22/16/20/backend-4496461_960_720.png";
const imageFront = "https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425_960_720.png";

const listTech = [
    ['BACK-END', imageBack],
    ['FRONT-END', imageFront]
];

const listLanguage = ['C#', 'Java', 'Angular', 'React'];

