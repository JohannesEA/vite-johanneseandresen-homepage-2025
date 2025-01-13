import ColorColumn from "./ColorColumn";
import "./ColorColumnsContainer.scss";
import { ColorColumnProps } from "../../types";

interface ColorColumnsContainerProps {
  items: ColorColumnProps[];
}

const ColorColumnsContainer = ({ items }: ColorColumnsContainerProps) => {
  return (
    <div className="color-columns-container">
      {items.map((language, index) => (
        <ColorColumn
          key={index}
          title={language.title}
          description={language.description}
          expertise={language.expertise}
          index={index}
        />
      ))}
    </div>
  );
};

export default ColorColumnsContainer;
