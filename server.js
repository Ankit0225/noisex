const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create the upload directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const app = express();
const port = 3000;

// Endpoint to handle file uploads
app.post('/upload', upload.single('song'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.send({ data: { Key: req.file.filename } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
