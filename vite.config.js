import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    publicDir: "assets",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                products: resolve(__dirname, "src/product.html"),
                productdetail: resolve(__dirname, "src/productdetail.html"),
                cart: resolve(__dirname, "src/cart.html"),
            },
        },
    },
});
