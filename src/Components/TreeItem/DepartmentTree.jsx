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
import entCI2Img from "../../assets/entCI2.jpg";

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
    email: "principal@mail.com",
    departments: [
      {
        name: "CST",
        position: "Department",
        ci1: "Mr. Manna Mehedi Bakul",
        ci1Image: cstCI1Img,
        ci1Phone: "01711-000001",
        ci1Email: "bakul.cst@mail.com",

        ci2: "Mst. Nurzahan",
        ci2Image: cstCI2Img,
        ci2Phone: "01711-000002",
        ci2Email: "nurzahan.cst@mail.com",
      },
      {
        name: "Electrical",
        position: "Department",
        ci1: "Abdul Halim",
        ci1Image: elecCI1Img,
        ci1Phone: "01711-000003",
        ci1Email: "halim.eee@mail.com",

        ci2: "Mr. F",
        ci2Image: elecCI2Img,
        ci2Phone: "01711-000004",
        ci2Email: "f.eee@mail.com",
      },
      {
        name: "Electronics",
        position: "Department",
        ci1: "Mr. G",
        ci1Image: entCI1Img,
        ci1Phone: "01711-000005",
        ci1Email: "g.et@mail.com",

        ci2: "Mr. H",
        ci2Image: entCI2Img,
        ci2Phone: "01711-000006",
        ci2Email: "h.et@mail.com",
      },
      {
        name: "RAC",
        position: "Department",
        ci1: "Mr. I",
        ci1Image: racCI1Img,
        ci1Phone: "01711-000007",
        ci1Email: "i.rac@mail.com",

        ci2: "Mr. J",
        ci2Image: racCI2Img,
        ci2Phone: "01711-000008",
        ci2Email: "j.rac@mail.com",
      },
      {
        name: "Power",
        position: "Department",
        ci1: "Mr. K",
        ci1Image: powerCI1Img,
        ci1Phone: "01711-000009",
        ci1Email: "k.power@mail.com",

        ci2: "Mr. L",
        ci2Image: powerCI2Img,
        ci2Phone: "01711-000010",
        ci2Email: "l.power@mail.com",
      },
      {
        name: "Mechanical",
        position: "Department",
        ci1: "Mr. M",
        ci1Image: mechCI1Img,
        ci1Phone: "01711-000011",
        ci1Email: "m.me@mail.com",

        ci2: "Mr. N",
        ci2Image: mechCI2Img,
        ci2Phone: "01711-000012",
        ci2Email: "n.me@mail.com",
      },
      {
        name: "Civil",
        position: "Department",
        ci1: "Mr. Nurul Amin",
        ci1Image: civilCI1Img,
        ci1Phone: "01711-000013",
        ci1Email: "nurul.civil@mail.com",

        ci2: "Mr. D",
        ci2Image: civilCI2Img,
        ci2Phone: "01711-000014",
        ci2Email: "d.civil@mail.com",
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
