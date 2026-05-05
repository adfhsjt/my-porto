"use client";

import React from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

// Komponen internal yang sebenarnya
const ThemeToggleComponent: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // Karena ini tidak di-render di server, kita bisa langsung
  // membaca state theme dengan aman.
  const isDark = theme === "dark";
  const icon = isDark ? "light" : "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};

export default ThemeToggleComponent;