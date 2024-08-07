import { Router } from "express";
import ProductManager from "../manager/product-manager.js";
const manager = new ProductManager("./src/data/products.json");
const router = Router();

router.get('/', async (req, res) => {
    const products = await manager.getProducts();
    res.render("home", {products});
});


router.get('/realtimeproducts', async (req, res) =>{
    res.render("realtimeproducts"); 
})

export { router as viewsRouter };