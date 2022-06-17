function addProduct(){

    let product = document.querySelector("#id-product").value;
    let shelf = document.getElementsByName("category");

    let productCategory
 

    for(let element = 0; shelf.length>element; element++){
        if(shelf[element].checked == true){
            console.log(shelf[element]);
            productCategory = shelf[element].value;
            break;
        }
    }

    console.log(dictProducts);

    dictProducts[productCategory].push(product);

    renderCard(productCategory);

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
var dairy = [];
var frozen = [];
var candy = [];

var dictProducts = [fruits, dairy, frozen, candy];
const dictNameProduct = ['fruits', 'dairy', 'frozen', 'candy'];