import React from "react";
import Split from "react-split";
import DqFilterBox from "../../components/DqFilterBox";
import ParameterTemplate from "./ParameterTemplate";
import Workflows from "./Workflows";
import WorkflowVersionDetail from "./WorkflowVersionDetail";
import WorkflowVersions from "./WorkflowVersions";

function App() {
  return (
    <Split className="flex h-full" sies={[50, 50]} gutterSize={4}>
      <div className="flex flex-col grow gap-1 px-2 pt-2">
        <DqFilterBox></DqFilterBox>
        <Workflows className="grow"></Workflows>
      </div>
      <Split
        className="flex flex-col"
        sizes={[50, 50]}
        direction="vertical"
        gutterSize={4}
      >
        <WorkflowVersions className="p-1"></WorkflowVersions>
        <Split
          className="flex min-h-fit"
          sizes={[50, 50]}
          gutterSize={4}
          minSize={[300, 300]}
        >
          <WorkflowVersionDetail className="p-1"></WorkflowVersionDetail>
          <ParameterTemplate className="p-1 grow"></ParameterTemplate>
        </Split>
      </Split>
    </Split>
  );
}
export default App;
