import DqPane from "../../components/DqPane";
import TabPanel, { Item } from "devextreme-react/tab-panel";
import DqDataGrid, { Column } from "../../components/DqDataGrid";
import TextArea from "devextreme-react/text-area";

function ParameterTemplate({ ...props }) {
  return (
    <DqPane
      title={"파라메터 템플릿"}
      className={`flex flex-col ${props.className} `}
    >
      <TabPanel className="p-2 h-full" activeStateEnabled={true}>
        <Item title="테이블">
          <div className="flow flow-col">
            <DqDataGrid
              className="grow h-full border-black"
              filterRowVisible={false}
            >
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
            </DqDataGrid>
          </div>
        </Item>
        <Item title="텍스트">
          <TextArea height={"100%"}></TextArea>
        </Item>
      </TabPanel>
    </DqPane>
  );
}

export default ParameterTemplate;
