function DqIconButton({ icon, ...props }) {
  props = props || {};
  icon = icon || "";
  return (
    <div
      className={`p-1 border w-[24px] h-[24px] bg-[color:var(--dq-bg-filter-item-dropdown)]  border-black flex items-center justify-center cursor-pointer active:bg-gray-800 ${props.className}`}
      {...props}
    >
      <i className={`bi bi-${icon} text-[12px]`}></i>
    </div>
  );
}

export default DqIconButton;
