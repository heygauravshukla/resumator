import Hero from "./components/Hero/Hero";
import Editor from "./components/Editor/Editor";

import { Container, CssBaseline } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Hero />
        <Editor />
      </Container>
    </>
  );
}

export default App;
