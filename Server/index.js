import cors from "cors";
import express from "express";
import multer from "multer";
import csvToJson from "./adapter.js";

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Activo");
});

app.post("/api/users", upload.single("file"), (req, res) => {
  const filePath = req.file.path;
  //console.log(req);
  csvToJson(filePath)
    .then((jsonObj) => {
      res.json(jsonObj);
    })
    .catch((error) => {
      res.status(500).json({ error: "No se pudo convertir a JSON" });
    });
});

app.listen(3000, () => {
  console.log("Server corriendo en el puerto 3000");
});
