const express = require("express");
const path = require("path");
const cors = require("cors");
const files = require("./routes/files");
const app = express();

app.use(cors());
app.use(
  "/movies",
  express.static(
    path.join(__dirname, "../../../../../mnt/d/Videos/transferred/")
  )
);
app.use(express.json());

app.use("/api/files", files);

const port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
