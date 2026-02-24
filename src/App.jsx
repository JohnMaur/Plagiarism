import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Profile } from "./sections";
import { SignUp, Login } from "./(auth)";
import LandingPage from "./LandingPage";
import { UserProvider } from "./(auth)/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <main>
          <Nav />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
};

export default App;
