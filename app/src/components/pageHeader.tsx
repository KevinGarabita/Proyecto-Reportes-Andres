import type { PropsWithChildren } from "react";

function PageHeader({ children }: PropsWithChildren) {
  return (
    <div className="container-fluid bg-telefield mb-3 p-4 text-center">
      {children}
    </div>
  );
}

export default PageHeader;
