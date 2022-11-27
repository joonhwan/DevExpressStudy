import React from "react";
import Split from "react-split";
import DqFilterBox from "../../components/DqFilterBox";
import ParameterTemplate from "./ParameterTemplate";
import Workflows from "./Workflows";
import WorkflowVersionDetail from "./WorkflowVersionDetail";
import WorkflowVersions from "./WorkflowVersions";

function App() {
  return (
    <Split className="flex h-screen" sies={[50, 50]} gutterSize={4}>
      <div className="flex flex-col gap-1 px-2 pt-2">
        <DqFilterBox></DqFilterBox>
        <Workflows className="grow"></Workflows>
      </div>
      <Split
        className="flex flex-col justify-between"
        sizes={[60, 40]}
        direction="vertical"
        gutterSize={4}
      >
        <WorkflowVersions className="p-1"></WorkflowVersions>
        <Split className="flex min-h-fit" sizes={[50, 50]} gutterSize={4}>
          <WorkflowVersionDetail className="p-1"></WorkflowVersionDetail>
          <ParameterTemplate className="p-1 grow"></ParameterTemplate>
        </Split>
      </Split>
    </Split>
  );
}
export default App;
