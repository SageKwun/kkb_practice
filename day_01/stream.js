const fs = require("fs");
// copy the image
const rs = fs.createReadStream("./1.png");
const ws = fs.createWriteStream("./2.png");
rs.pipe(ws);
