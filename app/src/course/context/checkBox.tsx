import {useContext} from "react";
import {ThemeContext} from "../../contexts";

export function CheckBox () {

    const {theme, setTheme} = useContext(ThemeContext)!;

    return (
        <label>
            <input
                checked={theme === "dark" || undefined}
                onChange={(e) => {

                    setTheme(e.target.checked
                        ? "dark"
                        : "light");

                }}
                type="checkbox"
            />
            Use dark mode
        </label>
    );

}
