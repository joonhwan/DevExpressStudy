function DqToolTextButton({ title, className, onClick }) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer border border-black w-[76px] h-[28px] bg-[color:var(--dq-bg-filter)] ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default DqToolTextButton;
