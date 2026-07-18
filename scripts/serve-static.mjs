import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(process.argv[2] ?? "dist");
const hostname = process.env.HOSTNAME ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function firstFile(candidates) {
  for (const candidate of candidates) {
    try {
      await access(candidate);
      if ((await stat(candidate)).isFile()) {
        return candidate;
      }
    } catch {}
  }
  return null;
}

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  const requestedPath = resolve(root, `.${pathname}`);

  if (requestedPath !== root && !requestedPath.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  const file = await firstFile([
    requestedPath,
    `${requestedPath}.html`,
    resolve(requestedPath, "index.html"),
  ]);
  const target = file ?? (await firstFile([resolve(root, "404.html")]));

  if (!target) {
    response.writeHead(404).end("Not found");
    return;
  }

  response.writeHead(file ? 200 : 404, {
    "Content-Type":
      contentTypes[extname(target)] ?? "application/octet-stream",
    "Cache-Control": target.endsWith(".html")
      ? "no-cache"
      : "public, max-age=31536000, immutable",
  });
  createReadStream(target).pipe(response);
}).listen(port, hostname, () => {
  process.stdout.write(`Serving ${root} at http://${hostname}:${port}\n`);
});
