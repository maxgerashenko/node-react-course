import {useContext} from "react";
import {ThemeContext} from "./contexts";

export function DarkMode () {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className={`dark-mode ${theme}`}>
            <label>
                <input
                    checked={theme === "dark"}
                    onChange={(e) => {

                        setTheme(e.target.checked
                            ? "dark"
                            : "light");

                    }}
                    type="checkbox"
                />
                Dark Mode
            </label>
        </div>
    );

}
