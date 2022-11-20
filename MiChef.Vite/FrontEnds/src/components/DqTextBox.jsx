import "./DqTextBox.scss";
import { TextBox } from "devextreme-react/text-box";

export default function DqTextBox({ children, ...props }) {
  return (
    <div className="dq">
      <TextBox className="text-base rounded-none" {...props}>
        {children}
      </TextBox>
    </div>
  );
}
