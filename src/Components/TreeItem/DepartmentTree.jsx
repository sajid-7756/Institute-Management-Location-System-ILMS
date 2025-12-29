import { useState } from "react";
import DepartmentModal from "./DepartmentModal";
import TreeNode from "./TreeNode";
// CST
import cstCI1Img from "../../assets/cstCI1.jpg";
import cstCI2Img from "../../assets/cstCI2.jpg";

// Civil
import civilCI1Img from "../../assets/civilCI1.jpg";
import civilCI2Img from "../../assets/civilCI2.jpg";

// Electrical
import elecCI1Img from "../../assets/etCI1.jpg";
import elecCI2Img from "../../assets/etCI2.jpg";

// Electronics
import entCI1Img from "../../assets/entCI1.jpg";
import entCI2Img from "../../assets/entCI2.png";

// Mechanical
import mechCI1Img from "../../assets/mtCI1.jpg";
import mechCI2Img from "../../assets/mtCI2.jpg";

// Power
import powerCI1Img from "../../assets/ptCI1.jpg";
import powerCI2Img from "../../assets/ptCI2.jpg";

// RAC
import racCI1Img from "../../assets/racCI1.jpg";
import racCI2Img from "../../assets/racCI2.jpg";

const DepartmentTree = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const instituteData = {
    name: "Md. Shafiqul Islam",
    position: "Principal",
    email: "bogura_poly@yahoo.com",
    phone: '8802588814060',
    departments: [
      {
        name: "CST",
        position: "Department",
        ci1: "Manna Mehadi Bokul",
        ci1Image: cstCI1Img,
        ci1Phone: "+880 1716-368649",
        ci1Email: "mehadibakul@gmail.com",

        ci2: "Noorjahan Aktar",
        ci2Image: cstCI2Img,
        ci2Phone: "+880 1917-326222",
        ci2Email: "noorjahanci987@gmail.com",
      },
      {
        name: "Electrical",
        position: "Department",
        ci1: "Md. Abdul Halim Sarkar",
        ci1Image: elecCI1Img,
        ci1Phone: "+880 718-406992",
        ci1Email: "ahalim1968@yahoo.com",

        ci2: "Engineer Md. Sajjad Kabir",
        ci2Image: elecCI2Img,
        ci2Phone: "+880 1984-780600",
        ci2Email: "skbir395@gmail.com",
      },
      {
        name: "Electronics",
        position: "Department",
        ci1: "Sayad Shafayetul Islam",
        ci1Image: entCI1Img,
        ci1Phone: "+880 1794-889804",
        ci1Email: "syedshafayetshakil@gmail.com",

        ci2: "Sayad Md. Mamunur Rashid",
        ci2Image: entCI2Img,
        ci2Phone: "+880 1721-916916",
        ci2Email: "syedmamunurrashid916916@gmail.com",
      },
      {
        name: "RAC",
        position: "Department",
        ci1: "Engineer Md. Waliul Islam",
        ci1Image: racCI1Img,
        ci1Phone: "+880 1787-250124",
        ci1Email: "waliulislam111@gmail.com",

        ci2: "Md. Rezaul Karim",
        ci2Image: racCI2Img,
        ci2Phone: "+880 1712-502242",
        ci2Email: "rezaulkarim97@gmail.com",
      },
      {
        name: "Power",
        position: "Department",
        ci1: "Md. Shah Alam Sarkar",
        ci1Image: powerCI1Img,
        ci1Phone: "+880 1552-359456",
        ci1Email: "shahalamsarkar.power@mail.com",

        ci2: "Md. Munirul Islam",
        ci2Image: powerCI2Img,
        ci2Phone: "+880 1550-006897",
        ci2Email: "mugdha231212@gmail.com",
      },
      {
        name: "Mechanical",
        position: "Department",
        ci1: "Md. Shafiul Al Aziz",
        ci1Image: mechCI1Img,
        ci1Phone: "+880 1712-433125",
        ci1Email: "azizshofiul@gmail.com",

        ci2: "Md. Shafiqul Islam Pk",
        ci2Image: mechCI2Img,
        ci2Phone: "+880 1706-371707",
        ci2Email: "Shafiqbd1978@yahoo.com",
      },
      {
        name: "Civil",
        position: "Department",
        ci1: "Engineer Md. Abdul Malek",
        ci1Image: civilCI1Img,
        ci1Phone: "+880 1714-926261",
        ci1Email: "malekbpi@gmail.com",

        ci2: "Md. Abdullah Al Mamun",
        ci2Image: civilCI2Img,
        ci2Phone: "+880 715-547479",
        ci2Email: "engr.aamamun@gmail.com",
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto ">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">
            🏛️ Welcome to Bogura Polytechnic Institute
          </h1>
          <p className="text-base-content/80 leading-relaxed text-lg mb-4">
            Explore our institutional hierarchy through an interactive
            organizational structure. Discover our leadership, departments, and
            chief instructors who shape the future of technical education in
            Bangladesh.
          </p>

          {/* Motto */}
          <p className="mt-4 text-secondary font-semibold text-xl">
            "Excellence in Technical Education"
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="badge badge-primary badge-lg">7 Departments</span>
            <span className="badge badge-secondary badge-lg">
              Interactive Tree
            </span>
            <span className="badge badge-accent badge-lg">
              Click to Explore
            </span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tree Container */}
        <div className="rounded-3xl shadow-xl bg-base-100 p-8 md:p-16 overflow-x-auto border border-base-300">
          <div className="inline-block min-w-full">
            <TreeNode
              data={instituteData}
              onCardClick={setSelectedDepartment}
              level={0}
            />
          </div>
        </div>

        {selectedDepartment && (
          <DepartmentModal
            department={selectedDepartment}
            onClose={() => setSelectedDepartment(null)}
          />
        )}
      </div>
    </section>
  );
};

export default DepartmentTree;
