import {useContext} from "react";
import {CurrentUserContext} from "./contexts";

export function Greeting () {

    const currentUserContext = useContext(CurrentUserContext);
    return (<p>
You logged in as{currentUserContext?.currentUser?.name}
.
</p>);

}
