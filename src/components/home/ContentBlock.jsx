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
          <div>{wordContent}</div>
          <div>{imageContent}</div>
        </>
      ) : (
        <>
          <div>{imageContent}</div>
          <div>{wordContent}</div>
        </>
      )}
    </article>
  );
}


export default ContentBlock;