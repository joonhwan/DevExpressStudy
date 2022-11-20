import { useState, useEffect, createRef } from "react";
import Select2 from "@/components/Select2";
import DropdownBox from "devextreme-react/drop-down-box";
import { Popup } from "devextreme-react/popup";
import DateBox from "devextreme-react/date-box";
import FilterBuilder, { Field } from "devextreme-react/filter-builder";
import CheckBox from "devextreme-react/check-box";

function DqFilterBox({ className }) {
  // const filterRef = createRef();
  const [filterVisible, showFilter] = useState(false);
  const toggleFilterVisible = () => {
    showFilter(!filterVisible);
  };
  const [filterValue, setFilterValue] = useState([
    [
      ["Product_Name", "startswith", "Super"],
      "and",
      ["Product_Cost", ">=", 300],
    ],
    "or",
    [["Product_Name", "contains", "HD"], "and", ["Product_Cost", "<", 200]],
  ]);
  // const openFilterDialog = () => {
  //   console.log("open filter...");
  //   showFilter(true);
  // };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     // console.log("click outside : ", event.target, filterRef.current);
  //     if (filterVisible && !filterRef.current.contains(event.target)) {
  //       showFilter(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // });
  return (
    <div
      className={`flex flex-col gap-1 relative {className ? className : ''}`}
    >
      <div className="flex flex-nowrap overflow-hidden gap-1 items-center">
        <div className="flex-none" style={{ width: "120px", height: "100%" }}>
          <Select2 className="w-full">
            <option value="1">수정일</option>
            <option value="2">생성일</option>
            <option value="3">아이디</option>
          </Select2>
        </div>
        <DateBox
          className="rounded-none"
          displayFormat="yyyy/MM/dd HH:mm:ss"
          type="datetime"
          style={{ width: "175px", height: "25px" }}
          value={new Date(2022, 11, 11)}
        />
        <span style={{ height: "100%" }}>~</span>
        <DateBox
          className="rounded-none"
          displayFormat="yyyy/MM/dd HH:mm:ss"
          type="datetime"
          style={{ width: "175px", height: "25px" }}
          value={new Date(2022, 12, 11)}
        />
        <Select2 style={{ width: "120px", height: "100%" }}>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="7">7</option>
          <option value="14">14</option>
          <option value="30">30</option>
          <option value="90">90</option>
          <option value="120">120</option>
        </Select2>
        <div className="flex gap-1 min-w-[85px]">
          <input className="mx-1" type="checkbox" id="show-my-workflow" />
          <label htmlFor="show-my-workflow">내 것만 보기</label>
        </div>
      </div>
      <div className="flex flex-nowrap overflow-hidden gap-1 items-center relative">
        <div className="flex-none" style={{ width: "120px", height: "100%" }}>
          <Select2 className="w-full">
            <option value="1">내림차순</option>
            <option value="2">오름차순</option>
          </Select2>
        </div>
        <div className="flex-none" style={{ width: "120px", height: "100%" }}>
          <Select2 className="w-full">
            <option value="1">수정일</option>
            <option value="2">생성일</option>
            <option value="3">아이디</option>
          </Select2>
        </div>
        <div className="dq-search-button relative overflow-hidden flex gap-1 items-center px-1 h-full grow">
          <i className="bi bi-search"></i>
          <div
            className="relative grow px-2 cursor-pointer select-none
            overflow-hidden whitespace-nowrap"
            onDoubleClick={toggleFilterVisible}
          >
            <p>더블클릭 또는 편집버튼을 눌러 검색 조건을 추가하세요</p>
          </div>
          <div
            className="p-1 border w-[24px] h-[24px] bg-[color:var(--dq-bg-filter-item-dropdown)]  border-black flex items-center justify-center cursor-pointer active:bg-gray-800"
            onClick={toggleFilterVisible}
          >
            <i className="bi bi-pencil-fill text-[12px]"></i>
          </div>
          <div className="p-1 border w-[24px] h-[24px] border-black flex items-center justify-center  cursor-pointer">
            <i className="bi bi-trash-fill text-[12px]"></i>
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer border border-black w-[76px] h-[28px] bg-[color:var(--dq-bg-filter)]">
          검색
        </div>
        {/* <FilterBuilder defaultFields={columns} /> */}
      </div>
      <Popup
        visible={filterVisible}
        hideOnOutsideClick={true}
        onHiding={toggleFilterVisible}
        showTitle={true}
        width={500}
        resizeEnabled={true}
        dragEnabled={true}
        position="center"
        titleComponent={() => {
          return (
            <p className="text-base align-text-bottom pt-1">
              📚 검색 조건 편집
            </p>
          );
        }}
        onDisposing={() => console.log("disposing...")}
        onShowing={() => console.log("showing...")}
        onShown={(e) => console.log("shown...", e)}
        onHidden={(e) => console.log("hidden...", e)}
      >
        <div
          className={`w-full h-full p-1 overflow-visible flex flex-col gap-2`}
        >
          <FilterBuilder
            className="h-full bg-[var(--dq-bg-view)] p-2"
            value={filterValue}
            onValueChange={setFilterValue}
          >
            <Field dataField="Product_ID" dataType="number" caption="ID" />
            <Field dataField="Product_Name" />
            <Field
              dataField="Product_Cost"
              dataType="number"
              caption="Cost"
              format="currency"
            />
          </FilterBuilder>
          <div className="flex justify-end">
            <div
              className="flex items-center justify-center cursor-pointer border border-black w-[76px] h-[28px] bg-[color:var(--dq-bg-filter)]"
              onClick={(e) => {
                console.log("검색조건 변경됨 : ", filterValue);
                toggleFilterVisible(e);
              }}
            >
              검색
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default DqFilterBox;
