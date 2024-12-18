
const Education = () => {
  return (
    <div id='education'>
      <section className="p-5 md:p-16 text-[#060414]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center flex justify-center mb-6">
          <span
          className='text-7xl text-[#0b081f]'> 
            E
          </span>
          <span>ducational <span className='text-7xl text-[#0b081f]'>Q</span>ualifications</span>
          </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item */}
          <div className="card bg-base-100 p-4 border shadow-sm shadow-[#1B1833]">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Secondary School Certificate</h3>
              <p className="text-md font-bold text-gray-600">Darmapur Amin Uddin High School | 2019 - 2020</p>
              <p className="mt-2 font-bold text-base text-gray-500">
               Dept: Science; Result: GPA-3.89 (out of 5); Board: Comilla
              </p>
            </div>
          </div>

          {/* Education Item */}
          <div className="card bg-base-100 p-4 border shadow-sm shadow-[#1B1833]">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Diploma in Computer Science & Technology</h3>
              <p className="text-md font-bold text-gray-600">Institute of Computer Science & Technology | 2020-2024</p>
              <p className="mt-2 font-bold text-base text-gray-500">
                Dept: CST; Result: 3.5(Projected); Board: BTEB;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Education;