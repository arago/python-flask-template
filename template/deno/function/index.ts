import { ServerRequest } from "../deps.ts";

export default async function handler(req: ServerRequest) {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "hello deno!",
  });
}
