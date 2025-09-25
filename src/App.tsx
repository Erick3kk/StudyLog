import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AddStudy } from "./pages/add-study";
import { useState } from "react";
import type { StudySession } from "./types/study";

function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);

  const handleAddStudy = (study: StudySession) => {
    setStudies((prevStudies) => [...prevStudies, study]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<h1>Home</h1>}
        />
        <Route
          path="add"
          element={
            <AddStudy
              onAdd={handleAddStudy}
              studies={studies}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;