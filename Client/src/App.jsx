import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState();
  const [json, setJson] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setJson(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <h1 className="text-teal-600">Upload CSV and Get JSON</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="bg-black overflow-auto  h-96">
        {json && <pre>{JSON.stringify(json, null, 2)}</pre>}
      </div>
    </>
  );
}

export default App;
