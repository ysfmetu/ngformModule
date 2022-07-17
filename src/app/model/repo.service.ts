import {Product} from "./product.model";
import {StaticDataSource} from "./static.datasource";
import {Injectable} from "@angular/core";
@Injectable()
export class ModelRepo {
    public products:Product[];
    private locator = (p: Product, id?: number) => p.id === id;

    constructor(private datasource:StaticDataSource) {
        this.products=new Array<Product>();
        this.datasource.getData().forEach(p=>this.products.push(p));
    }
    getProducts():Product[]{
        return this.products;
    }
    getProduct(id:number):Product|undefined{
        return this.products.find(p=>this.locator(p,id));
    }
    saveProduct(product:Product){
        if(product.id===0||product.id===null){
            product.id = this.generateID();
            this.products.push(product)
        }
    }
    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}