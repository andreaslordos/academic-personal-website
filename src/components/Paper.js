/** @jsxImportSource theme-ui */
import { Themed } from "@theme-ui/mdx";
import configData from "../config.json"
const paperSx = {
  textAlign: "center",
};

export default function Paper(props) {
  const { title, authors, link, event } = props;

  // Function to highlight author name
  const highlightAuthor = (text) => {
    const authorsList = text.split(", ");
    return authorsList
      .map((author, index) => {
        if (author === configData.authorName) {
          return <u key={index}>{author}</u>;
        }
        return author;
      })
      .reduce(
        (prev, curr, index) => (index === 0 ? [curr] : [prev, ", ", curr]),
        []
      );
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
