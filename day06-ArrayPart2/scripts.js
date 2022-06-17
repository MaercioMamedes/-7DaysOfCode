function addProduct(){

    let product = document.querySelector("#id-product");
    let shelf = document.getElementsByName("category");

    let productCategory
 

    for(let element = 0; shelf.length>element; element++){
        if(shelf[element].checked == true){
            productCategory = shelf[element].value;
            break;
        }
    }

    dictProducts[productCategory].push(product.value);
    product.value='';
    renderCard(productCategory);


}

function removeItem(){
    let headerField = document.querySelector("#field-text");
    headerField.innerHTML = `<p>Escolhar em qual seção você deseja excluir algum item</p>`;

    let shelf = document.getElementsByName("category");

    for(let element = 0; shelf.length>element; element++){
        shelf[element].addEventListener('click', removeRender, false);
    }
}
function removeRender(event){

    let category = event.target.value;

    let classCategory = dictNameProduct[category];

    let objectCard = document.getElementsByClassName(classCategory)[0];

    objectCard.innerHTML = "";

    for(let element = 0; dictProducts[category].length > element; element++ ){

        let elementList = document.createElement('li');
        elementList.className='container';

        elementList.innerHTML += `
                                <input class="remove" type="checkbox" name="removeList" id="element${element}" value = "${element}">
                                <label for= "element${element}">${dictProducts[category][element]}</lalbel>
                                    
        `
        objectCard.appendChild(elementList);
    }

    objectCard.innerHTML += '<button>Excluir itens selecionados</button>'

}

function renderCard(productCategory){
    let classProduct = dictNameProduct[productCategory]
    let card = document.querySelector(`.${classProduct}`);
    card.innerHTML='';

    for(let element = 0; dictProducts[productCategory].length>element ; element++){
        let productList = document.createElement("li");
        productList.innerText = dictProducts[productCategory][element];
        card.appendChild(productList);
    }
}


var fruits = [];
var dairy  = [];
var frozen = [];
var candy  = [];

var dictProducts = [fruits, dairy, frozen, candy];
const dictNameProduct = ['fruits', 'dairy', 'frozen', 'candy'];