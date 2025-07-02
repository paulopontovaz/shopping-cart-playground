import { Hono } from "hono";
import
    {
        getAllProductsService,
    } from "./services";

const productsRouter = new Hono();

productsRouter.get("/", async (c) => {
    try {
        const productList = await getAllProductsService();
        return c.json({ productList }, 200);
    } catch (error) {
        console.error(
            "##### Error while getting products #####\n\n",
            error,
        );
        c.json({ error: "Error while getting products." }, 500);
    }
});

export { productsRouter };
