/** @jsxImportSource theme-ui */
import { useLocation, Link } from "react-router-dom";
import { Themed } from "@theme-ui/mdx";
import configData from "../config.json"

// Styles for Navbar
const navbarSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "3rem 0rem",
  backgroundColor: "#ffffff",
  position: "sticky",
  top: 0,
  zIndex: 10,
  flexWrap: "wrap",
  marginBottom: "1rem",
  width: "80%",
  "@media (max-width: 835px)": {
    borderBottom: "1px solid #ccc",
    width: "100%",
    padding: "0.8rem 0.5rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },
};

// Styles for Navbar links
const linkSx = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "800",
  fontSize: "1.2rem",
  minWidth: "120px",
  textAlign: "center",
  "&:hover": {
    color: "#007BFF",
  },
  "&.active": {
    borderBottom: "2px solid #007BFF",
  },
  "@media (max-width: 835px)": {
    minWidth: "10px",
    paddingInline: "10px",
  },
};

// Navbar component
export default function Navbar() {
  const location = useLocation();
  const sections = Object.keys(configData.pages)
    .filter((key) => configData.pages[key] === true)
    .map((key) => configData.pageNames[key] || key);

  // Function to determine the path for the section
  const getPath = (section) => section === configData.pageNames.Homepage
    ? "/"
    : `/${section.replace(" ", "").toLowerCase()}`;

  return (
    <div sx={navbarSx} className="navbar">
      {sections.map((section, index) => {
        const path = getPath(section);

        // If the section is "CV", return an <a> tag to open the PDF in a new tab
        if (section === configData.pageNames.CV) {
          return (
            <a
              key={index}
              href="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkSx}
            >
              <Themed.h3>{section}</Themed.h3>
            </a>
          );
        }

        // Return a Link component for other sections
        return (
          <Link
            key={index}
            to={path}
            sx={linkSx}
            className={location.pathname === path ? "active" : ""}
          >
            <Themed.h3>{section}</Themed.h3>
          </Link>
        );
      })}
    </div>
  );
}
