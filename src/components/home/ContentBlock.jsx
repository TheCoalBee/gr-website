/**
 * left or right alignment changes which is in which div
 * 
 */
function ContentBlock({ alignment = "left", wordContent, imageContent, theme="light" }) {
  const isLeft = alignment === "left";

  return (
    <article className={`content-block ${theme}`}>
      {isLeft ? (
        <>
          <div className="text-content">{wordContent}</div>
          <div className="image-content">{imageContent}</div>
        </>
      ) : (
        <>
          <div className="image-content">{imageContent}</div>
          <div className="text-content">{wordContent}</div>
        </>
      )}
    </article>
  );
}


export default ContentBlock;