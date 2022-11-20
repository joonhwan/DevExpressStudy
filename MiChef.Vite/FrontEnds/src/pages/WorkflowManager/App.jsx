import React from "react";
import Split from "react-split";
import DqFilterBox from "../../components/DqFilterBox";
import WorkflowVersions from "../../components/WorkflowVersions";

function App() {
  return (
    <Split className="flex h-screen" gutterSize={4}>
      <div className="flex flex-col gap-1 px-2 pt-2">
        <DqFilterBox></DqFilterBox>
        <WorkflowVersions className="flex-auto"></WorkflowVersions>
      </div>
      <div className="px-1">
        <div>버전관리</div>
        <div>워크플로우 버전목록</div>
        <div>파라미터 템플릿</div>
      </div>
    </Split>
  );
}
export default App;
