import ColorColumnsContainer from "../../../components/colums/ColorColumnsContainer";
import { LANGUAGES } from "../../../development/data";

const LanguageModalContent = () => {
  return (
    <div>
      <ColorColumnsContainer items={LANGUAGES} />
    </div>
  );
};

export default LanguageModalContent;
