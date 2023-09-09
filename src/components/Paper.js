/** @jsxImportSource theme-ui */
import { Themed } from "@theme-ui/mdx";
import configData from "../config.json"
const paperSx = {
  textAlign: "center",
};

export default function Paper({ title, authors, link, event }) {

  // Function to highlight author name
  const highlightAuthor = (authors) => {
    return authors
      .split(", ")
      .map((author, index) => author === configData.authorName ? <u key={index}>{author}</u> : author)
      .join(", ");
  };

  return (
    <div sx={paperSx}>
      <br />
      <Themed.h2>{link ? <a href={link}>{title}</a> : title}</Themed.h2>
      <br />
      <Themed.h3>{highlightAuthor(authors)}</Themed.h3>
      <br />
      <Themed.h3>
        <i>{event}</i>
      </Themed.h3>
      <br />
      <hr />
    </div>
  );
}
