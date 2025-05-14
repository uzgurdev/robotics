import React from "react";
import Image from "next/image";

import MapImage from "../../../public/map.png";

export default function Map() {
  return (
    <div>
      <Image src={MapImage} alt="map" className="w-full h-full object-cover" />
    </div>
  );
}
