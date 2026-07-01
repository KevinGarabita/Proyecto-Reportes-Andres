import type { PropsWithChildren } from "react";

function PageHeader({ children }: PropsWithChildren) {
  return (
    <div className="container-fluid bg-Uxmal-nav mb-3 p-4 pb-0 text-center">
      {children}
    </div>
  );
}

export default PageHeader;
