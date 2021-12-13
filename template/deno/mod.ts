import { createApp } from "./deps.ts";
import fnHandler from "./function/index.ts";

const app = createApp();

app.handle("/", fnHandler);

app.listen({ port: 3000 });
