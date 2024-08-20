import ColorColumnsContainer from "../../../components/colums/ColorColumnsContainer";
import { PROGRAMMING_LANGUAGES } from "../../../development/data";

const ProgrammingLanguageModalContent = () => {
  return (
    <div>
      <ColorColumnsContainer items={PROGRAMMING_LANGUAGES} />
    </div>
  );
};

export default ProgrammingLanguageModalContent;
