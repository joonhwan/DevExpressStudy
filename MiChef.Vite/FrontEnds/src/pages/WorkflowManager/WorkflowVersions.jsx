import "./WorkflowVersions.scss";
import DqPane from "../../components/DqPane";
import DqDataGrid, { Column } from "../../components/DqDataGrid";
import DqToolTextButton from "../../components/DqToolTextButton";

const versions = [];
for (var i = 0; i < 100; i++) {
  versions.push({
    id: i,
    version: "버전" + i,
    fileName: `recipe_${i}.py`,
    createUser: "User" + i,
    updateUser: "User" + i,
    createDate: new Date(2021, 12, 11, 12, 10, 11),
    updateDate: new Date(2021, 12, 11, 12, 10, 11),
  });
}

function WorkflowVersions({ ...props }) {
  return (
    <DqPane
      className={`workflow-versions grow ${props.className}`}
      title={"버전관리"}
    >
      <div className="flex flex-col h-full">
        <div className="flex py-2">
          <DqToolTextButton
            className="w-auto px-4"
            title={"다운로드"}
          ></DqToolTextButton>
          <DqToolTextButton
            className="w-auto px-4"
            title={"기본으로 설정"}
          ></DqToolTextButton>
          <DqToolTextButton
            className="w-auto px-4"
            title={"기본버전 찾기"}
          ></DqToolTextButton>
          <div className="grow"></div>
          <DqToolTextButton
            className="w-auto px-4"
            title={"추가"}
          ></DqToolTextButton>
          <DqToolTextButton
            className="w-auto px-4"
            title={"수정"}
          ></DqToolTextButton>
          <DqToolTextButton
            className="w-auto px-4"
            title={"삭제"}
          ></DqToolTextButton>
        </div>
        <DqDataGrid className="border-black grow" dataSource={versions}>
          <Column
            //
            dataField="version"
            caption="버전"
            alignment={"center"}
          ></Column>
          <Column
            //
            dataField="fileName"
            caption="파일명"
            alignment={"center"}
          ></Column>
          <Column
            dataField="createUser"
            alignment={"center"}
            caption={"생성자"}
          ></Column>
          <Column
            dataField="updateUser"
            alignment={"center"}
            caption={"수정자"}
          ></Column>
          <Column
            dataField="createDate"
            alignment={"center"}
            caption={"생성일"}
          ></Column>
          <Column
            dataField="updateDate"
            alignment={"center"}
            caption={"수정일"}
          ></Column>
        </DqDataGrid>
      </div>
    </DqPane>
  );
}

export default WorkflowVersions;
