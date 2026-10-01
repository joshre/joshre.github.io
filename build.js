#!/usr/bin/env node
const esbuild = require("esbuild");

const options = {
  entryPoints: ["js/site.js"],
  outfile: "js/site.min.js",
  bundle: true,
  minify: true,
  target: "es2020",
  logLevel: "info",
};

if (process.argv.includes("--watch")) {
  esbuild.context(options).then((ctx) => ctx.watch());
} else {
  esbuild.build(options).catch(() => process.exit(1));
}
