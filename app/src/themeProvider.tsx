import {useEffect, useState} from "react";
import {ThemeContext} from "./contexts";

function useOnThemeChange (setTheme: (value: string) => void) {

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    useEffect(
        () => {

            function onThemeChange (isDarkMode: boolean) {

                setTheme(isDarkMode
                    ? "dark"
                    : "light");

            }
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            onThemeChange(isDarkMode);

            const handler = (e: MediaQueryListEventInit) => {

                onThemeChange(Boolean(e.matches));

            };

            mediaQuery.addEventListener(
                "change",
                handler
            );
            return () => mediaQuery.removeEventListener(
                "change",
                handler
            );

        },
        []
    );

}

export function ThemeProvider ({children}: any) {

    const [
        theme,
        setTheme]:
any = useState<string>("dark");

    useOnThemeChange(setTheme);

    return (
        <ThemeContext.Provider value={{theme,
            setTheme}}
        >
            {children}
        </ThemeContext.Provider>
    );

}
