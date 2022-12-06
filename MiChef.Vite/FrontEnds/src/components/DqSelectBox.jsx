import { SelectBox } from "devextreme-react/select-box";

function DqSelectBox({ children, ...props }) {
  return (
    <SelectBox
      dataSource={["로더", "운영", "학습"]}
      readOnly={false}
    ></SelectBox>
  );
}

export default DqSelectBox;
