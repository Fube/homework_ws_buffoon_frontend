import { Container } from "react-bootstrap"
import './App.css';
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Navigation />
      <LandingPage />
    </Container>
  );
}

export default App;
