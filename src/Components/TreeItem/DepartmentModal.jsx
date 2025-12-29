import { User } from "lucide-react";

const DepartmentModal = ({ department, onClose }) => {
  if (!department) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all hover:rotate-90 duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-5 relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-1">
                Department of {department.name}
              </h2>
              <p className="text-lg text-indigo-100">Chief Instructors</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-xl">
                <img
                  src={department.ci1Image}
                  alt={department.ci1}
                  className="w-15  h-15 rounded-full"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">
                Chief Instructor (1st Shift)
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{department.ci1}</p>
            <p className="font-bold text-gray-800">
              Email: {department.ci1Email}
            </p>
            <p className="font-bold text-gray-800">
              Phone: {department.ci1Phone}
            </p>
            <p className="font-bold text-gray-800">Location: </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-xl">
                <img
                  src={department.ci2Image}
                  alt={department.ci2}
                  className="w-15  h-15 rounded-full"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">
                Chief Instructor (2nd Shift)
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{department.ci2}</p>
            <p className="font-bold text-gray-800">
              Email: {department.ci2Email}
            </p>
            <p className="font-bold text-gray-800">
              Phone: {department.ci2Phone}
            </p>
            <p className="font-bold text-gray-800">Location: </p>
          </div>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default DepartmentModal;
