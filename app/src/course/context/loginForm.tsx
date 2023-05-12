import {useContext, useState} from "react";
import {Button} from "./button";
import {CurrentUserContext} from "./contexts";

export function LoginForm () {

    const {setCurrentUser}: any = useContext(CurrentUserContext),
        [
            firstName,
            setFirstName
        ] = useState(""),
        [
            lastName,
            setLastName
        ] = useState(""),
        canLogin = firstName !== "" && lastName !== "";
    return (
        <>
            <div>
                <label>
                    First name
                    {": "}

                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        value={firstName}
                    />
                </label>
            </div>

            <div>
                <label>
                    Last name
                    {": "}

                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        value={lastName}
                    />
                </label>
            </div>

            <Button
                disabled={!canLogin}
                onClick={() => {

                    setCurrentUser({
                        "name": `${firstName} ${lastName}`
                    });

                }}
            >
                Log in
            </Button>

            {!canLogin && <i>
                Fill in both fields.
                          </i>}
        </>
    );

}
