import Image from "next/image";

import Video from "../../../public/video.png";

export default function Review() {
  return (
    <div className="md:px-20 px-[15px]">
      <p className="uppercase text-[#F0D625] text-center md:text-start font-bold text-[23px] leading-8">
        отзывы
      </p>
      <div className="flex items-center-justify-center md:gap-11.5 gap-[15px] overflow-y-auto no-scrollbar">
        <Image src={Video} alt="video" className="w-[220px] h-[310px] object-cover" />
        <Image src={Video} alt="video" className="w-[220px] h-[310px] object-cover" />
        <Image src={Video} alt="video" className="w-[220px] h-[310px] object-cover" />
        <Image src={Video} alt="video" className="w-[220px] h-[310px] object-cover" />
        <Image src={Video} alt="video" className="w-[220px] h-[310px] object-cover" />
      </div>
    </div>
  );
}
