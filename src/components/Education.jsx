import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div id='education'>
      <section className="p-5 md:p-16 text-[#060414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-5xl font-extrabold px-5 flex flex-wrap gap-2 items-center justify-center mb-6">
          <div>
          <span className='text-7xl text-[#0b081f]'>E</span>
          <span>ducational</span> 
          </div>
          <div>
          <span className='text-7xl text-[#0b081f]'>Q</span>
          <span>ualifications</span>
          </div>
          </div>
        
          <VerticalTimeline>
        {/* Educational Item 1 */}
        <VerticalTimelineElement
          date="2020 - 2025"
          contentStyle={{ background: "#1C325B", color: "#1D1616" }}
          contentArrowStyle={{ borderRight: "7px solid #1C325B" }}
          iconStyle={{ background: "#1C325B", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=wogrNmTvt9qn&format=png"
                alt="Bachelor Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#ffffff] text-[20px] font-bold">
            Diploma in Engineering
          </h3>
          <p className="text-[#b8b6b6] text-[16px] font-semibold mb-4">
            Institute of Computer Science & Technology (ICST)
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#b8b6b6] text-[14px]">
              Computer Science and Technology <br />
              Projected on 2025 with CGPA: 3.5 out of 4.00
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Educational Item 2
        <VerticalTimelineElement
          date="2018 - 2019"
          contentStyle={{ background: "#E8EAF6", color: "#3F51B5" }}
          contentArrowStyle={{ borderRight: "7px solid #3F51B5" }}
          iconStyle={{ background: "#3F51B5", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=81348&format=png"
                alt="HSC Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#3F51B5] text-[20px] font-bold">
            Higher Secondary Certificate
          </h3>
          <p className="text-[#303F9F] text-[16px] font-semibold mb-4">
            Comilla Govt. Women’s College
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#303F9F] text-[14px]">
              HSC in Science <br />
              Completed in 2019
            </li>
          </ul>
        </VerticalTimelineElement> */}

        {/* Educational Item 3 */}
        <VerticalTimelineElement
          date="2019 - 2020"
          contentStyle={{ background: "#D9DFC6", color: "#1D1616" }}
          contentArrowStyle={{ borderRight: "7px solid #D9DFC6" }}
          iconStyle={{ background: "#D9DFC6", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png"
                alt="SSC Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#0a1831] text-[20px] font-bold">
            Secondary School Certificate
          </h3>
          <p className="text-[#1C325B] text-[16px] font-semibold mb-4">
            Dharmapur Amin Uddin High School
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#1C325B] text-[14px]">
              SSC in Science
            </li>
            <li className="text-[#1C325B] text-[14px]">
              Completed in 2020
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </section>
    </div>
  );
};

export default Education;
