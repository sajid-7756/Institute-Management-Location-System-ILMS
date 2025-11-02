import { useState } from "react";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import principal from "../../assets/principal.jpeg";

const TreeNode = ({ data, onCardClick, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = data.departments && data.departments.length > 0;

  const colors = [
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-rose-500 via-pink-500 to-fuchsia-500",
  ];

  const isPrincipal = level === 0;

  return (
    <div className="flex flex-col items-center animate-fadeIn">
      {/* Card */}
      <div
        onClick={() => {
          if (!isPrincipal) {
            onCardClick(data);
          }
        }}
        className={`relative bg-linear-to-br ${
          colors[level % colors.length]
        } text-white rounded-2xl shadow-lg p-6 transition-all duration-300 ${
          isPrincipal
            ? "w-72"
            : "w-56 cursor-pointer hover:shadow-2xl hover:scale-105"
        } group`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="bg-white rounded-2xl p-4 mb-3 shadow-md transition-transform">
            {isPrincipal ? (
              <img src={principal} alt="" />
            ) : (
              <User
                className={`${
                  isPrincipal ? "w-12 h-12" : "w-10 h-10"
                } text-gray-700`}
              />
            )}
          </div>
          <h3
            className={`font-bold ${
              isPrincipal ? "text-xl" : "text-base"
            } mb-1 leading-tight`}
          >
            {data.name}
          </h3>
          <p className="text-xs opacity-90 font-medium">{data.position}</p>
          {hasChildren && isPrincipal && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 bg-white bg-opacity-25 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30 flex items-center gap-2 hover:bg-opacity-35 transition-all text-info"
            >
              <span className="text-xs font-bold">
                {data.departments.length} Departments
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </div>

      {/* Connecting Line and Children */}
      {hasChildren && isExpanded && (
        <>
          {/* Vertical line down */}
          <div className="w-1 h-12 bg-linear-to-b from-gray-300 to-gray-400 rounded-full"></div>

          {/* Connection point */}
          <div className="relative w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-gray-400 to-gray-300 rounded-full"></div>
            {data.departments.length > 1 && (
              <div className="absolute top-6 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            )}
            {/* Connection dots */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full shadow-sm"></div>
          </div>

          {/* Children */}
          <div className="flex gap-8 mt-6 flex-wrap justify-center">
            {data.departments.map((dept, idx) => (
              <div key={idx} className="relative">
                {/* Vertical line up to child */}
                {data.departments.length > 1 && (
                  <>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-t from-gray-400 to-gray-300 rounded-full -top-6"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full shadow-sm -top-6"></div>
                  </>
                )}
                <TreeNode
                  data={dept}
                  onCardClick={onCardClick}
                  level={level + 1}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TreeNode;
