import { useEffect, useState } from "react";
import { TagBlock, TagTitle } from "./style";

interface Props {
  tag: Tag;
}

const TagItem = (props: Props) => {
  const { tag } = props;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // const gray = (tag.color.red + tag.color.green + tag.color.blue) / 3;
    const yiq =
      (tag.color.red * 299 + tag.color.green * 587 + tag.color.blue * 114) /
      1000;

    yiq > 127 ? setIsDark(true) : setIsDark(false);
  }, []);

  return (
    <TagBlock $color={tag.color}>
      <TagTitle $isDark={isDark}>{tag.title}</TagTitle>
    </TagBlock>
  );
};

export default TagItem;
