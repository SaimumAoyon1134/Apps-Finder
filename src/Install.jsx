// import React from "react";
// import { useContext } from "react";
// import { InstallContext } from "./App";
// import InstallAppCard from "./InstallAppCard";

// const Install = () => {
//   const { installedApps, installApp } = useContext(InstallContext);

//   return (
//     <div className="bg-[rgb(245,245,245)]">
//       <div className="text-4xl font-bold text-center mt-20">
//         Your Installed Apps
//       </div>
//       <div>
//         <p className="text-center text-sm px-20 text-gray-400 font-light mt-5">
//           Explore All Trending Apps on the Market developed by us
//           </p>
//           <p className="text-left pl-10 text-2xl font-bold">{installedApps.length} Apps Found </p>
//           <div className="flex flex-col space-y-3  ">
            
//             {installedApps.map((app) => (
//               <InstallAppCard key={app.id} app={app} />
//             ))}
//           </div>
   
//       </div>
//     </div>
//   );
// };

// export default Install;
import React, { useContext, useState } from "react";
import { InstallContext } from "./App";
import InstallAppCard from "./InstallAppCard";

const Install = () => {
  const { installedApps } = useContext(InstallContext);
  const [sortOrder, setSortOrder] = useState(""); // sorting state

  // Sort apps based on selected order
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.downloads - a.downloads; // Descending
    } else if (sortOrder === "low-high") {
      return a.downloads - b.downloads; // Ascending
    } else {
      return 0; // No sorting
    }
  });

  return (
    <div className="bg-[rgb(245,245,245)] min-h-screen py-10">
      <div className="text-4xl font-bold text-center mt-20">
        Your Installed Apps
      </div>

      <p className="text-center text-sm px-20 text-gray-400 font-light mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center px-10 mt-10">
        <p className="text-2xl font-bold">
          {sortedApps.length} Apps Found
        </p>

    
        <div className="mt-5 md:mt-0">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-50 focus:outline-none focus:ring-2 focus:ring-[#54CF68] shadow-[3px_3px_8px_rgba(0,0,0,0.2)] hover:scale-[1.03] duration-300"
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>

      {/* Installed Apps */}
      <div className="flex flex-col space-y-3 mt-5">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => <InstallAppCard key={app.id} app={app} />)
        ) : (
          <p className="text-center text-gray-500 mt-10">No apps installed.</p>
        )}
      </div>
    </div>
  );
};

export default Install;