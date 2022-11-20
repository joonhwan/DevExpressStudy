import { Button } from "devextreme-react/button";

export default function DqButton({ children, className, ...props }) {
  return (
    <Button
      className={`text-sm rounded-none bg-[var(--dq-bg-button)] border-black ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
