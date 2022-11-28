function DqPane({ className, title, children }) {
  return (
    <div className={`flex flex-col justify-self-stretch ${className}`}>
      <header className="px-2 py-1 bg-[var(--dq-bg-view-grid-header)]">
        {title}
      </header>
      <div className="grow overflow-y-auto">{children}</div>
    </div>
  );
}

export default DqPane;
