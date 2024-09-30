import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../src/components/auth/signUp.tsx";
import { LoginForm } from "./components/auth/logIn.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
