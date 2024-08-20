import React, { useEffect, useState } from "react";
import "./ColorColumn.scss";

interface ColorColumnProps {
  title: string;
  description?: string;
  expertise: number;
  index: number;
}

const ColorColumn: React.FC<ColorColumnProps> = ({
  title,
  description,
  expertise,
  index,
}) => {
  // Define an array of color variables corresponding to the expertise levels
  const colorVariables = ["--color-primary"];

  // Calculate color based on the index
  const color = colorVariables[index % colorVariables.length];

  // State for filled width
  const [fillWidth, setFillWidth] = useState("0%");

  useEffect(() => {
    // Trigger the animation
    setTimeout(() => setFillWidth(`${expertise}%`), 0);
  }, [expertise]);

  return (
    <div className="color-column">
      <div
        className="color-column__fill"
        style={{ backgroundColor: `var(${color})`, width: fillWidth }}
      >
        {/* Fill element */}
      </div>
      <div className="color-column__content">
        <h2 className="color-column__title">{title}</h2>
        {description && (
          <p className="color-column__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ColorColumn;
