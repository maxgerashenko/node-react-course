import {useContext} from "react";
import {ThemeContext} from "./contexts";

export function Panel ({
    title,
    showCheckBox,
    onChange,
    isChecked,
    children
}: any) {

    const {theme}: any = useContext(ThemeContext),
        className = `panel-${theme}`;
    if (showCheckBox) {

        return (
            <section className={className}>
                <h1>
                    <input
                        checked={isChecked}
                        onChange={onChange}
                        type="checkbox"
                    />

                    {title}
                </h1>

                {children}
            </section>
        );

    }

    return (
        <section className={className}>
            <h1>
                {title}
            </h1>

            {children}
        </section>
    );

}
