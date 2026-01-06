"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [stylePos, setStylePos] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest || !target.closest(".nav-dropdown")) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useLayoutEffect(() => {
    if (!open) return setStylePos(null);
    const btn = btnRef.current;
    const menu = menuRef.current;
    if (!btn || !menu) return;

    const rect = btn.getBoundingClientRect();
    const menuW = menu.offsetWidth;
    const menuH = menu.offsetHeight;

    // Prefer to open below the button; if not enough space, open above.
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const gap = 8;

    let top: number;
    if (spaceBelow >= menuH + gap) {
      top = rect.bottom + gap;
    } else if (spaceAbove >= menuH + gap) {
      top = rect.top - menuH - gap;
    } else {
      // fallback: clamp inside viewport
      top = Math.max(gap, window.innerHeight - menuH - gap);
    }

    // Horizontal: try to align right edge of menu with button right edge,
    // but keep menu inside viewport.
    let left = rect.right - menuW;
    if (left < 8) left = 8;
    if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;

    setStylePos({ position: "fixed", top: `${top}px`, left: `${left}px`, zIndex: 9999 });

    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-brand">Game Ready</div>

      <div className="nav-actions nav-dropdown">
        <button
          ref={btnRef}
          aria-haspopup="true"
          aria-expanded={open}
          className="menu-button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          Menu ▾
        </button>

        {open && (
          <div ref={menuRef} className="menu-panel" role="menu" style={stylePos ?? undefined}>
            <a href="#why" className="menu-item">Why</a>
            <a href="/generator" className="menu-item">Generator</a>
            <a href="/about" className="menu-item">About</a>
          </div>
        )}
      </div>
    </header>
  );
}
