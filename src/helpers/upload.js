const fs = require("fs");

module.exports = {
  store: (image) => {
    const fileName = `${Date.now()}.png`;
    fs.writeFileSync(__dirname + `/../../uploads/${fileName}`, image, "base64");
  },
};
