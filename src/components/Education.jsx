import React from "react";

const Education = () => {
  const institutes = [
    {
      degree: "🎓 C.S.E (Computer Science & Engineering)",
      institute: "Sylhet International University, Bangladesh",
      duration: "2014 - 2017",
      passingYear: "2018",
      board:"N/A",
      group: "Department of CSE",
      description:
        "Completed a Bachelor'Computer Science and Engineering (CSE) is an interdisciplinary field that combines the principles of computer science and computer engineering to design, develop, and implement computer systems and software. It encompasses the study of algorithms, programming languages, data structures, computer architecture, networks, and more. CSE professionals work on a wide range of applications, from developing software and hardware solutions to advancing fields like artificial intelligence and cybersecurity. s degree with a major in Business Administration. Developed critical thinking, communication skills, and gained understanding in business management, finance, and marketing.",
    },
    {
      degree: "🏫 HSC (Higher Secondary Certificate)",
      institute: "Dharmaghar College",
      duration: "2011 - 2012",
      passingYear: "2013",
      board: "Sylhet Board",
      group: "Science",
      description:
        "Completed Higher Secondary It focuses on foundational scientific knowledge and skills, with a strong emphasis on subjects like Physics, Chemistry, Biology, and Mathematics. ",
    },
    {
      degree: "🏫 SSC (Secondary School Certificate)",
      institute: "Mofazzil Ali High School",
      duration: "2010-2010",
      passingYear: "2011",
      board: "Sylhet Board",
      group: "Science",
      description:
        "Completed SSC with a concentration in Science. Developed basics in physics, chemistry, mathematics, and general studies with consistent academic performance.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        Educational <span className="text-cyan-400">Qualifications</span>
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {institutes.map((edu, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-3xl shadow-md hover:shadow-xl transition-all p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl text-cyan-600 font-bold">
                  {edu.degree}
                </h3>
                <p className="text-lg  mt-1">
                  {edu.institute}
                </p>
              </div>
              <p className="text-sm sm:text-md md:text-lg font-semibold text-green-400">
                {edu.duration}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
              <div className="text-sm sm:text-base">
                <span className="font-semibold text-cyan-500">Passing Year:</span>{" "}
                <span className="text-green-500 font-bold">{edu.passingYear}</span>
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Board:</span> {edu.board}
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Faculty:</span> {edu.group}
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-sm sm:text-base">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
