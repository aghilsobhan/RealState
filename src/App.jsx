import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AgentList from "../src/pages/AgentList";
import AboutUs from "../src/pages/AboutUs";
import PageList from "../src/pages/PageList";
import PageNotFound from "../src/pages/PageNotFound";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import AppLayoot  from "./ui/AppLayoot";
function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route element={<AppLayoot />}>
            <Route index element={<Navigate replace to="homePage" />} />
            <Route path="homePage" element={<HomePage />} />
            <Route path="agentList" element={<AgentList />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="pageList" element={<PageList />} />
          </Route>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
