import React from "react";
import Split from "react-split";
import Datasets from "./Datatsets";

function App() {
  return (
    <Split
      className="flex h-full"
      sizes={[50, 50]}
      gutterSize={4}
      direction="horizontal"
    >
      <Split
        className="flex flex-col grow"
        direction="vertical"
        sizes={[60, 40]}
        gutterSize={4}
      >
        <Datasets className="grow">데이터셋</Datasets>
        <Split className="grow flex min-h-[40%] w-full" gutterSize={4}>
          <div className="grow">상세보기</div>
          <div className="grow">설명</div>
        </Split>
      </Split>
      <Split
        className="flex flex-col grow"
        direction="vertical"
        sizes={[60, 40]}
        gutterSize={4}
      >
        <div className="grow">GT 데이터셋</div>
        <Split className="grow flex" gutterSize={4}>
          <div className="grow">상세보기</div>
          <div className="grow">설명</div>
        </Split>
      </Split>
    </Split>
  );
}
export default App;
