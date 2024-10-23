import * as React from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="dropdown-menu">{children}</div>;
}

export function DropdownMenuTrigger({
  asChild,
  children,
}: {
  asChild: boolean;
  children: React.ReactNode;
}) {
  return <div className="dropdown-menu-trigger">{children}</div>;
}

export function DropdownMenuContent({
  align,
  children,
}: {
  align: string;
  children: React.ReactNode;
}) {
  return <div className={`dropdown-menu-content ${align}`}>{children}</div>;
}

export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
  return <div className="dropdown-menu-label">{children}</div>;
}

export function DropdownMenuItem({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="dropdown-menu-item" onClick={onClick}>
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="dropdown-menu-separator" />;
}

export function DropdownMenuCheckboxItem({
  checked,
  onCheckedChange,
  children,
}: {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="dropdown-menu-checkbox-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
      />

      {children}
    </div>
  );
}
