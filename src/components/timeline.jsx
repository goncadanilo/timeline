import React from "react";

export function Timeline({ lanes }) {
  return (
    <div
      id="timeline"
      className="bg-gray-100 rounded mt-5 cursor-grab overflow-x-auto"
    >
      {/* <div className="flex gap-4 mt-6 mb-2 px-2 w-full">
            {months.map((month) => (
              <div
                key={month}
                className="text-sm font-semibold text-zinc-700 px-4 py-2 flex-1 border-l"
              >
                {month}
              </div>
            ))}
          </div> */}
      {lanes.map((lane) => (
        <React.Fragment key={lane[0].id}>
          <div className="flex items-center gap-5 p-6 w-max">
            {lane.map((item) => (
              <div
                key={item.id}
                className="bg-blue-300 px-4 py-2 flex flex-col items-center rounded"
              >
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-200 w-full"></div>
        </React.Fragment>
      ))}
    </div>
  );
}
