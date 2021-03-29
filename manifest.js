/*
 * @Date: 27/03/2021 17.05.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 27/03/2021 17.08.21 +0800
 * @FilePath: /md/manifest.js
 */
const fs = require("fs");
const manifest = require("./src/manifest.json");

manifest.h5.publicPath = process.env.SERVER_ENV !== "NETLIFY" ? "/" : "/";
const result = JSON.stringify(manifest, null, 2);

fs.writeFile("./src/manifest.json", result, function (err) {
	if (err) {
		console.error(err);
	}
});
