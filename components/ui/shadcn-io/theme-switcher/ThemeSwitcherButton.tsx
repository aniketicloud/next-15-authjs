"use client";
import { ThemeSwitcher } from "@/components/ui/shadcn-io/theme-switcher";
import { useTheme } from "next-themes";

const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useTheme();
  // Narrow the theme value coming from `useTheme()` which is `string | undefined`
  // to the union expected by ThemeSwitcher: 'light' | 'dark' | 'system'.
  const themeValue =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  return (
    <ThemeSwitcher
      defaultValue="system"
      onChange={setTheme}
      value={themeValue}
    />
  );
};
export default ThemeSwitcherButton;
