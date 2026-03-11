import { useMemo } from "react";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";

interface IconTextProps {
  text: string;
}

function IconText({ text }: IconTextProps) {
  const lines = useMemo(() => text.split("\n"), [text]);
  const renderedLines = useMemo(
    () => lines.map(line => renderTextWithIcons(line)),
    [lines]
  );
  return (
    <>
      {renderedLines.map((rendered, i) => (
        <span key={i}>
          {rendered}
          {i < renderedLines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default IconText;
