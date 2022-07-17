import {Injectable} from "@angular/core";
import {Product} from "./product.model";

@Injectable()
export class StaticDataSource {
    private data: Product[];
    constructor() {
        this.data = new Array<Product>(
            new Product(1, "Kayak", "Doğa Sporları", 275),
            new Product(2, "Sörf", "Su Sporları", 48.95),
            new Product(3, "Futbol", "Saha Sporları", 19.50),
            new Product(4, "Basket", "Saha Sporları", 34.95),
            new Product(5, "Masa Tenisi", "Masa Sporları", 16));
    }
    getData(): Product[] {
        return this.data;
    }
}