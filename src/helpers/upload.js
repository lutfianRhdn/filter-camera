// const fs = require("fs");

// module.exports = {
//   store: (image) => {
//     const fileName = `${Date.now()}.png`;
//     fs.writeFileSync(__dirname + `/../../uploads/${fileName}`, image, "base64");
//   },
// };

async function uploadBasic() {
  const fs = require("fs");
  const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");

  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
  });
  const service = google.drive({ version: "v3", auth });
  const fileMetadata = {
    title: "image.jpg",
  };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream(__dirname + `/../../uploads/image.png`),
  };
  try {
    const file = await service.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });
    console.log("File Id:", file.data.id);
    return file.data.id;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}
// [END drive_upload_basic]

module.exports = uploadBasic;
