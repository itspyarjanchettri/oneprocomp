import { Card } from "flowbite-react";
import { GoClockFill } from "react-icons/go";
import { RiGraduationCapFill } from "react-icons/ri";
import cardData from "./data";

const customCardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white dark:bg-white",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "h-60 w-full object-cover rounded-t-lg",
      on: "h-60 w-full object-cover rounded-t-lg md:w-48 md:h-60 md:rounded-none md:rounded-l-lg",
    },
  },
};
export function CardComponent() {
  return (
    <div className="flex">
      {cardData.map((item, index) => (
        <Card
          key={index}
          theme={customCardTheme}
          className="max-w-sm border shadow-none  dark:border-borderColor  m-5"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={item.imgSrc}
        >
          <div className="">
            <h1>
              <span className="text-xs text-[#555555]">by</span>
              Determined-Poitras
            </h1>
            <h5 className="text-[20px]  font-semibold tracking-tight text-textblack dark:text-black">
              {item.title}
            </h5>
            <div className="flex items-center text-[16px] font-normal gap-8">
              <p className="flex items-center gap-2">
                <GoClockFill size={13} className="text-textorange" /> 2Weeks
              </p>
              <p className="flex items-center gap-2">
                <RiGraduationCapFill size={13} className="text-textorange" />
                156 Students
              </p>
            </div>
            <hr className="my-5 border-borderColor" />
            <div className="flex items-center justify-between text-[18px]">
              <div className="flex gap-5 items-center">
                <p>{item.price}</p>
                <p>{item.disPrice}</p>
              </div>
              <p className="font-semibold">View More</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
