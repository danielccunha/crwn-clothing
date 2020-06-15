import React, { useState } from "react";

import CollectionPreview from "../../components/CollectionPreview";
import SHOP_DATA from "./data.json";

export default function Shop() {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}
