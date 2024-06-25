import React from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "../utils/Swoldier";

function Header(props) {
  let { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-centers justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-lg sm:text2xl md:text-3xl ">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
function Generator() {
  return (
    <SectionWrapper
      className="min-h-screen"
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your position"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeindex) => {
          return (
            <button
              key={typeindex}
              className="bg-slate-950 border border-blue-400 dureation-200 hover:border-blue-600 py-4 rounded-lg"
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscle judged for annihilation"}
      />
      <div className="bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg">
        <div className="relative flex items-center justify-center">
          <p>Seleect muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </div>
      </div>
    </SectionWrapper>
  );
}
export default Generator;
