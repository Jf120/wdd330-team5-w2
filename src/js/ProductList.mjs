import {renderlistwithtemplate } from "./utils.mjs";

function ProductCardTemplate(product) {
    return `<li class = "product-card"> 
    <a href ="product_pages/index.html?product=${product.Id}"> 
    <img src ="${product.Image}"
    alt ="Image of ${product.Name}" />
    <h3 class ="card_brand">${product.Brand.Name} </h3>
    <h2 class ="card_name">${product.Name} </h2>
    <p class = "product-card_price">$${product.FinalPrice}</p></a>
    </li>`;
}




export default class ProductList {
    constructor (category, datasource, listElement) {
    // we decided to use this information in order to make our class as reusable as possible 
    // the ability to be able to define these things when we use the class will make  it flexible
   this.category = category
   this.datasource = datasource
   this.listElement = listElement

    }
    async init() {
        const list = await this.datasource.getData();
        this.renderlist(list);
    }
    renderlist(list)

}