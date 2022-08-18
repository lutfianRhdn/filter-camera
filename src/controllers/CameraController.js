const upload = require("../helpers/upload");
const uploadBasic = require("../helpers/upload");
module.exports = {
  index: (req, res) => {
    uploadBasic();
    // res.render("index");
  },
  store: async (req, res) => {
    // res.redirect("/");
    const image = req.body.image.toString("base64");
    upload.store(image);
    return res.json({ message: "success" });
  },
};
