import {useEffect, useState,} from "react";

export const useLocalStorageState = (key: any, initialState: any,) => {

    const [
        value,
        setValue,
    ] = useState(localStorage.getItem(key,) || initialState,);

    useEffect(
        () => {

            localStorage.setItem(
                key,
                value,
            );

        },
        [
            value,
            key,
        ],
    );

    return [
        value,
        setValue,
    ];

};
