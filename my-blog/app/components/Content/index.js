import { formatText, shortText } from "@/constants/helper";
import { useState } from "react";

const ContentComponent = ({ content }) => {
  const [show, setShow] = useState(false);
  //render html Dangerously -start
  const ctn = formatText(content);
  const shortContent = shortText(ctn, 100);
  const html = `${show ? ctn : shortContent}`;
  //render html Dangerously -end
  const handleViewMore = () => {
    setShow((s) => !s);
  };
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
      {content?.length > 100 && (
        <div
          style={{
            textAlign: "right",
            width: "90%",
            fontWeight: "medium",
            cursor: "pointer",
          }}
          onClick={handleViewMore}
        >
          {show ? "Thu lại" : "Xem thêm"}
        </div>
      )}
    </>
  );
};

export default ContentComponent;
