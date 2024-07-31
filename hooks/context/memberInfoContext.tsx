import * as React from "react";

const memberInfoBottomSheetContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function useMemberInfoBottomSheet() {
  const useMemberInfoBottomSheet = React.useContext(
    memberInfoBottomSheetContext
  );
  if (!useMemberInfoBottomSheet) {
    throw new Error("Must be used within a ContextProvider");
  }
  return useMemberInfoBottomSheet;
}

export function MemberInfoBottomSheetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <memberInfoBottomSheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </memberInfoBottomSheetContext.Provider>
  );
}
