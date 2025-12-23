const fs = require("fs");
const path = require("path");

const packagePath = path.resolve(__dirname, "./package.json");
const metaPath = path.resolve(__dirname, "./public/meta.json");

const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
const buildDate = Date.now();

packageJson.build_date = buildDate;

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

const metaData = {
  build_date: buildDate,
  latest_version: packageJson.version,
};

fs.writeFileSync(metaPath, JSON.stringify(metaData, null, 2));

console.log("✅ meta.json updated with latest build info.");
