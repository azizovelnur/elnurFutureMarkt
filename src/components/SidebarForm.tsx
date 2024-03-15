import { useEffect } from "react";

type SidebarFormProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarForm: React.FC<SidebarFormProps> = ({
  active,
  setActive,
}) => {
  const blurBackground = () => {
    document.body.style.overflow = "hidden";
  };

  const removeBlur = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (active) {
      blurBackground();
    } else {
      removeBlur();
    }
  }, [active]);

  return (
    <aside className={`sidebar-form ${active ? "active" : ""}`}>
      <button onClick={() => setActive(false)}>close</button>
      SidebarForm
    </aside>
  );
};
