import "./AddWorkflowPopup.scss";
import Select2 from "../../components/Select2";
import DqTextBox from "../../components/DqTextBox";
import DqCheckBox from "../../components/DqCheckBox";
import Popup, { ToolbarItem } from "devextreme-react/popup";
import DqDropDownBox, { List } from "../../components/DqDropDown";
import DqSelectBox from "../../components/DqSelectBox";

function AddWorkflow({ popupVisible, setPopupVisible, ...props }) {
  return (
    <Popup
      className="dq-add-workflow-popup"
      visible={popupVisible}
      animation={undefined}
      closeOnOutsideClick={true}
      width={"524px"}
      height={"220px"}
      title={"워크플로우 추가"}
      onHiding={() => setPopupVisible(false)}
    >
      <form className="dq-add-workflow-form">
        <label>
          <span>구분</span>
          <Select2 className="w-full">
            <option value={1}>로더</option>
            <option value={2}>운영</option>
            <option value={3}>학습</option>
          </Select2>
        </label>
        <label>
          <span>ID</span>
          <div className="flex gap-2">
            <Select2 className="w-32">
              <option value={1}>날짜</option>
              <option value={2}>직접입력</option>
            </Select2>
            <DqTextBox
              className="grow h-full"
              value={"NONE_2022_11_17_13_09_NONE"}
            ></DqTextBox>
          </div>
        </label>
        <label>
          <span>제목</span>
          <div className="flex gap-2">
            <DqTextBox className="grow h-full"></DqTextBox>
            <DqCheckBox title="ID와 동일하게" checked={true}></DqCheckBox>
          </div>
        </label>
        <label>
          <span>저장소</span>
          <Select2 className="w-full">
            <option value={1}>기본</option>
            <option value={2}>보안</option>
          </Select2>
        </label>
      </form>

      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location={"after"}
        options={{
          text: "확인",
          onClick: () => setPopupVisible(false),
        }}
      ></ToolbarItem>
      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location={"after"}
        options={{
          text: "취소",
          onClick: () => setPopupVisible(false),
        }}
      ></ToolbarItem>
    </Popup>
  );
}

export default AddWorkflow;
