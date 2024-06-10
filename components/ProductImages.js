import { useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <div>
      <div>
        <img src={activeImage} />
      </div>

      <Row>
        {images.map((image) => (
          <div
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
            key={image}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </Row>
    </div>
  );
}
