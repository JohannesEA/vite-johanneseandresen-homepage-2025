import ColorColumnsContainer from "../../../components/colums/ColorColumnsContainer";
import { FRAMEWORKS } from "../../../development/data";

const FrameworkModalContent = () => {
  return (
    <div>
      <ColorColumnsContainer items={FRAMEWORKS} />
    </div>
  );
};

export default FrameworkModalContent;
