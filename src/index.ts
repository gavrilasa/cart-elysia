import { Elysia } from "elysia";
import { betterAuthPlugin } from "./plugins/better-auth";
import { cartModule } from "./modules/cart";
import { productModule } from "./modules/product";
import openapi from "@elysiajs/openapi";
import { auth } from "./lib/auth";
import { sentry } from "elysiajs-sentry";

const app = new Elysia()
	.mount(auth.handler)
	.use(openapi())
	.use(betterAuthPlugin)
	.use(productModule)
	.use(cartModule)
	.use(sentry());
// .listen(3000);

// console.log(
// 	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );

export default app;
