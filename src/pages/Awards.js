/** @jsxImportSource theme-ui */
import { sanityClient } from "../client";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Award from "../components/Award";
import { Themed } from "@theme-ui/mdx";

const pageSx = {
  textAlign: "center",
};

export default function Awards(props) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "award"]  | order(index asc) {
                ...
            }`
      )
      .then((data) => {
        setItemData(data);
        document.title = props.title;
      })
      .catch(console.error);
  }, [props.title]);

  if (!itemData) {
    return Loading();
  }
  
  return (
    <div css={pageSx}>
      <Themed.h1>{props.title}</Themed.h1>
      {itemData.map((award) => {
        return (
          <Award
            key={award._id}
            title={award.title}
            awardingbody={award.awardingbody}
            image={award.image}
            prizefor={award.prizefor}
            link={award.link}
          />
        );
      })}
    </div>
  );
}
