import { useState } from "react";
import DqDataGrid, { Column } from "./DqDataGrid";
import Select2 from "./Select2";
import DqCheckBox from "./DqCheckBox";
import DqToolTextButton from "./DqToolTextButton";

const workflowVersions = [];
for (var i = 0; i < 100; i++) {
  workflowVersions.push({
    id: i,
    title: "제목" + i,
    defaultVersion: "version" + i,
    createDate: new Date(2021, 12, 11, 12, 10, 11),
    createUser: "User" + i,
    updateDate: new Date(2021, 12, 11, 12, 10, 11),
    updateUser: "User" + i,
  });
}

function WorkflowVersions({ className }) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [idVisible, setIdVisible] = useState(true);

  return (
    <div
      className={className + " flex flex-col"}
      data-x-label="workflowVersions"
    >
      <div className="flex mb-1 gap-2">
        <Select2 className="grow-0 w-[120px]">
          <option value="1">전체</option>
          <option value="2">운영</option>
          <option value="3">학습</option>
        </Select2>
        <DqCheckBox
          title={"ID"}
          checked={idVisible}
          onChange={() => setIdVisible(!idVisible)}
        ></DqCheckBox>
        <DqCheckBox
          title={"제목"}
          checked={titleVisible}
          onChange={() => setTitleVisible(!titleVisible)}
        ></DqCheckBox>
        <div className="grow"></div>
        <DqToolTextButton title={"추가"}></DqToolTextButton>
        <DqToolTextButton title={"수정"}></DqToolTextButton>
        <DqToolTextButton title={"삭제"}></DqToolTextButton>
      </div>
      <DqDataGrid className="grow" dataSource={workflowVersions}>
        <Column
          //
          dataField="id"
          caption="ID"
          alignment={"center"}
          visible={idVisible}
        ></Column>
        <Column
          dataField="title"
          caption={"제목"}
          visible={titleVisible}
        ></Column>
        <Column
          dataField="defaultVersion"
          alignment={"center"}
          caption={"기본버전"}
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
  );
}

export default WorkflowVersions;
