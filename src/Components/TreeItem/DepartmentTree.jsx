import { useState } from "react";
import DepartmentModal from "./DepartmentModal";
import TreeNode from "./TreeNode";

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
        ci2: "Mst. Nurzahan",
      },
      {
        name: "Electrical",
        position: "Department",
        ci1: "Abdul Halim",
        ci2: "Mr. F",
      },
      {
        name: "Electronics",
        position: "Department",
        ci1: "Mr. G",
        ci2: "Mr. H",
      },
      { name: "RAC", position: "Department", ci1: "Mr. I", ci2: "Mr. J" },
      { name: "Power", position: "Department", ci1: "Mr. K", ci2: "Mr. L" },
      {
        name: "Mechanical",
        position: "Department",
        ci1: "Mr. M",
        ci2: "Mr. N",
      },
      {
        name: "Civil",
        position: "Department",
        ci1: "Mr. Nurul Amin",
        ci2: "Mr. D",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl shadow-2xl p-8 mb-10 text-center border border-gray-100">
          <div className="inline-block text-primary  bg-clip-text mb-3">
            <h1 className="text-5xl font-black">
              Welcome to Bogura Polytechnic Institute Office Management System
            </h1>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            Click on any department card to view chief instructors
          </p>
        </div>

        <div className=" rounded-3xl shadow-2xl p-16 overflow-x-auto border border-gray-100">
          <div className="inline-block min-w-full">
            <TreeNode
              data={instituteData}
              onCardClick={setSelectedDepartment}
              level={0}
            />
          </div>
        </div>
      </div>

      {selectedDepartment && (
        <DepartmentModal
          department={selectedDepartment}
          onClose={() => setSelectedDepartment(null)}
        />
      )}
    </div>
  );
};

export default DepartmentTree;
