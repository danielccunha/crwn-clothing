import React from "react";

import CollectionItem from "../CollectionItem";
import { Container, Title, Preview } from "./styles";

export default function CollectionPreview({ title, items }) {
  return (
    <Container>
      <Title>{title}</Title>

      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </Container>
  );
}
