import Image from "next/image";
import { backgroundImage } from "@/data/background";

export function PageBackground() {
  return (
    <>
      <div className="page-background-base" aria-hidden="true" />
      <div className="page-background" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="page-background__image"
        />
        <div className="page-background__fog" />
        <div className="page-background__fog-extra" />
      </div>
    </>
  );
}
