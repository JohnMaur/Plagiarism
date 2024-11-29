import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./sections";
import { SignUp, Login } from "./(auth)";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <Router>
      <main>
        <Nav />

        <Routes>
          <Route path="/plagiarism-checker" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
