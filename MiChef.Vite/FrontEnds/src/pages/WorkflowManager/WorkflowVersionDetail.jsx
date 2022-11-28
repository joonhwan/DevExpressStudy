import { Form, SimpleItem } from "devextreme-react/form";
import { TextArea } from "devextreme-react/text-area";
import DqIconButton from "../../components/DqIconButton";
import DqPane from "../../components/DqPane";
import DqToolTextButton from "../../components/DqToolTextButton";
import "./WorkflowVersionDetail.scss";

function WorkflowVersionDetail({ ...props }) {
  const workflowVersion = {
    version: 1,
    dataStatus: "success",
    fileName: "fileName.py",
    createDate: new Date(2021, 12, 11, 12, 10, 11),
    createUser: "User1",
    updateDate: new Date(2021, 12, 11, 12, 10, 11),
    updateUser: "User1",
    description: "이거슨 설명",
  };

  return (
    <DqPane
      title={"워크플로우 버전"}
      className={`flex flex-col ${props.className}`}
    >
      <div className="grow">
        <Form
          className="p-2 max-h-fit"
          formData={workflowVersion}
          readOnly={true}
        >
          <SimpleItem
            dataField="version"
            label={{ text: "버전", showColon: false }}
          />
          <SimpleItem
            dataField="dataStatus"
            label={{ text: "상태", showColon: false }}
          />
          <SimpleItem
            dataField="fileName"
            label={{ text: "파일명", showColon: false }}
          />
          <SimpleItem
            dataField="createDate"
            label={{ text: "생성일", showColon: false }}
          />
          <SimpleItem
            dataField="createUser"
            label={{ text: "생성자", showColon: false }}
          />
          <SimpleItem
            dataField="updateDate"
            label={{ text: "수성일", showColon: false }}
          />
          <SimpleItem
            dataField="updateUser"
            label={{ text: "수정자", showColon: false }}
          />
        </Form>
        <div className="p-2 pbtext-[14px] grow">
          <label className="flex flex-col h-full">
            <div className="flex justify-between">
              <span>설명</span>
              <DqIconButton icon="journal-richtext"></DqIconButton>
            </div>
            <TextArea className="grow" height={"120px"}></TextArea>
          </label>
        </div>
      </div>
    </DqPane>
  );
}

export default WorkflowVersionDetail;
