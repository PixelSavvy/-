export const setActiveStyles = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? "transition-colors rounded-sm transition-colors p-2 text-secondary font-tbc-bld "
    : "transition-colors rounded-sm transition-colors hover:bg-accent focus:bg-accent  p-2 hover:text-secondary focus:text-secondary ";
};
