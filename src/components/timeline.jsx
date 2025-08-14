import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export function Timeline({ lanes }) {
  return (
    <div
      id="timeline"
      className="bg-gray-100 rounded mt-5 cursor-grab overflow-x-auto"
    >
      <TransformWrapper
        initialScale={1}
        maxScale={3}
        doubleClick={{ mode: "toggle", animationType: "linear" }}
      >
        <TransformComponent>
          <div>
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
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
