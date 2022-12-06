import { List } from "devextreme-react/list";
import DropDownBox from "devextreme-react/drop-down-box";

function DqDropDownBox({ children, ...props }) {
  return <DropDownBox>{children}</DropDownBox>;
}

export default DqDropDownBox;
export { List };
