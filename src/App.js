/* @jsxImportSource theme-ui */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme/theme";

import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Papers from "./pages/Papers";
import Press from "./pages/Press";
import Work from "./pages/Work";
import Homepage from "./pages/Homepage";
import ContentItem from "./pages/ContentItem";
import PageNotFound from "./pages/PageNotFound";

import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";

import configData from './config.json';

const appSx = {
  width: "67%",
  display: "flex",
  flexDirection: "column",
  marginTop: "0em",
  minHeight: "-webkit-fill-available",

  iframe: {
    aspectRatio: "16/9",
    width: "100%",
  },

  "@media (max-width: 835px)": {
    width: "85%",
  },
};

const containerSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Horizontally centers the child elements
  justifyContent: "flex-start", // Optional, aligns children vertically to the start. You can also use 'center' to center them vertically.
  width: "100%", // This ensures that the container takes up the full width of its parent
  paddingBottom: "5rem",
};

function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <div sx={containerSx}>
          <Navbar />
          <div className="mainContent" sx={appSx}>
            <ScrollToTop />
            <Routes>
              <Route element={<Homepage title={configData.pageNames.Homepage}/>} path="/" exact />
              {configData.pages.Projects ? <Route element={<Work title={configData.pageNames.Projects}/>} path={"/" + configData.pageNames.Projects.replace(" ", "").toLowerCase()} exact /> : ""}
              {configData.pages.Papers ? <Route element={<Papers title={configData.pageNames.Papers}/>} path={"/" + configData.pageNames.Papers.replace(" ", "").toLowerCase()} exact /> : ""}
              {configData.pages.Awards ? <Route element={<Awards title={configData.pageNames.Awards}/>} path={"/" + configData.pageNames.Awards.replace(" ", "").toLowerCase()} exact /> : ""}
              {configData.pages.Press ? <Route element={<Press title={configData.pageNames.Press}/>} path={"/" + configData.pageNames.Press.replace(" ", "").toLowerCase()} exact /> : ""}
              {configData.pages.Contact ? <Route element={<Contact title={configData.pageNames.Contact}/>} path={"/" + configData.pageNames.Contact.replace(" ", "").toLowerCase()} exact /> : ""}
              <Route element={<ContentItem />} path="/content/:slug" />
              <Route element={<PageNotFound />} path="*" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeUIProvider>
  );
}

export default App;
