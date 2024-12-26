import { useEffect, RefObject } from "react";

interface UseClickOutsideProps {
  menuRef: RefObject<HTMLElement>;
  setMenuOpen: (menuOpen: boolean) => void;
}

function useClickOutside({ menuRef, setMenuOpen }: UseClickOutsideProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef, setMenuOpen]);
}

export default useClickOutside;
