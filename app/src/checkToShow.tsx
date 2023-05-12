import {ReactNode, useState} from "react";
import {Panel} from "./panel";

interface Props {
  children?: ReactNode;
  title?: string;
}

export default function CheckToShow ({children, title = "Title"}: Props) {

    const [
            isChecked,
            setIschecked
        ] = useState(true),
        setTheme = () => {

            setIschecked((pre) => !pre);

        };
    return (
        <Panel
            isChecked={isChecked}
            onChange={setTheme}
            showCheckBox
            title={title}
        >
            {isChecked
                ? children
                : null}
        </Panel>
    );

}
