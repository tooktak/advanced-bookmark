import React from "react";

const CombineProvider = (...components: React.FC[]) => (
  components.reduce((AccComponents, CurComponent) =>
    ({ children }: { children: React.ReactNode }) => (
      <AccComponents>
        <CurComponent>
          {children}
        </CurComponent>
      </AccComponents>
    ), ({ children }: { children: React.ReactNode }) => <>{children}</>
  )
);

export default CombineProvider;
