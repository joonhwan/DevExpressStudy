import "./DqTextBox.scss";
import { TextBox } from "devextreme-react/text-box";

export default function DqTextBox({ children, className, ...props }) {
  return (
    <div className={`dq ${className || ""}`}>
      <TextBox className="text-base rounded-none" {...props}>
        {children}
      </TextBox>
    </div>
  );
}
