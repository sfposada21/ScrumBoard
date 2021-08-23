const Upload = async (req, res, next) => {
  if (req.files.image.type) {
    let Type = req.files.image.type;
    if (
      type !== "image/png" &&
      type !== "image/png" &&
      type !== "image/png" &&
      type !== "image/gif"
    ) {
        return res.status(400).send("Invalid format");
        next();
    } else{
        next();
    }
  }
};

module.exports = Upload;
