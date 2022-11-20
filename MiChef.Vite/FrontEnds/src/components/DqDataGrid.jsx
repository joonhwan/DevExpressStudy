import "./DqDataGrid.scss";
import React from "react";
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
  Selection,
} from "devextreme-react/data-grid";
import DqTextBox from "./DqTextBox";
import DqButton from "./DqButton";

export default function DqDataGrid({ children, dataSource, ...props }) {
  const allowedPageSizes = [5, 10, 20, 50, 100];

  return (
    <div className="flex flex-col h-full">
      <DataGrid
        //
        className="text-base bg-white grow h-[300px]"
        dataSource={dataSource}
        keyExpr="id"
        hoverStateEnabled={true}
        showBorders={true}
        height={"100px"}
        focusedRowEnabled={false}
        // rowRender={(e) => {
        //   console.log(e);
        //   return <div>Row!!! </div>;
        // }}
        onFocusedRowChanged={(e) => {
          // e.component.selectRows([e.row.data.id]);
          console.log("row changed : ", e.rowIndex);
        }}
        {...props}
      >
        <Selection mode="single"></Selection>
        <FilterRow visible={true} />
        {/* <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          displayMode={"compact"}
          // showPageSizeSelector={true}
          showInfo={true}
          // showNavigationButtons={true}
        /> */}
        {children}
      </DataGrid>
      <div className="flex items-center gap-2 py-1">
        <span className="text-sm">페이지 크기</span>
        <DqTextBox className="w-14 h-[24px]" value={"30"}></DqTextBox>
        <DqButton className="px-2 h-[24px]">적용</DqButton>
        <span className="grow"></span>
        <DqButton className="px-2 h-[24px]">&lt;&lt;</DqButton>
        <DqButton className="px-2 h-[24px]">&lt;</DqButton>
        <DqTextBox className="w-14 h-[24px]" value={"30"}></DqTextBox>
        <span>/</span>
        <DqTextBox className="w-14 h-[24px]" value={"30"}></DqTextBox>
        <DqButton className="px-2 h-[24px]">&gt;</DqButton>
        <DqButton className="px-2 h-[24px]">&gt;&gt;</DqButton>
      </div>
    </div>
  );
}

export { Column };
