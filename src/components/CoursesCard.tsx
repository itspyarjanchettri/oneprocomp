import { RiGraduationCapFill } from "react-icons/ri";
import cardData from "../components/data";
import { GoClockFill } from "react-icons/go";

// const isNumber = !isNaN(item.disPrice.replace(/\$/g, ''));

export const CoursesCard = () => {
  return (
    <div>
      <div className="mt-16 flex  flex-wrap justify-center items-center gap-5 m-5">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[410px] relative group h-[474px] transition-transform duration-300 hover:-translate-y-5 hover:shadow-xl rounded-3xl border border-borderColor bg-cardbg flex flex-col"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="h-[250px] w-full  rounded-t-3xl object-cover"
            />

          <div>
            <p className="absolute top-0 px-[12px] py-[8px] font-medium text-[16px] m-5 rounded-xl bg-black text-white">Photography</p>
          </div>

            <div className="p-5 space-y-3">
              <h1>
                <span className="text-sm font-normal text-[#555555]">by</span>
                &nbsp;Determined-Poitras
              </h1>
              <h5
                style={{ fontFamily: "exo", fontWeight: "600" }}
                className="text-[20px] w-11/12 text-wrap group-hover:text-textorange font-semibold tracking-tight text-textblack dark:text-black"
              >
                {item.title}
              </h5>
              <div className="flex items-center text-[16px] text-[#555555] font-normal gap-5">
                <p className="flex items-center gap-2">
                  <GoClockFill size={13} className="text-textorange" /> 2Weeks
                </p>
                <p className="flex items-center gap-2">
                  <RiGraduationCapFill size={13} className="text-textorange" />
                  156 Students
                </p>
              </div>
              <div className="flex mt-auto items-center border-t pt-3 border-borderColor bottom-14 justify-between text-[18px]">
                <div
                  style={{ fontFamily: "Jost", fontWeight: "400" }}
                  className="flex gap-2 items-center"
                >
                  <s className="text-gray-400 font-light ">{item.price}</s>
                  <p
                  style={{fontWeight: 500}}
                    className={
                      isNaN(Number(item.disPrice.replace(/\$/g, '')))
                        ? `text-customgreen`
                        : ` text-customred `
                    }
                  >
                    {item.disPrice}
                  </p>
                </div>
                <p className=" font-medium hover:text-textorange">View More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
