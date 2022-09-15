import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../state/current-user-state.atom";

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export default function CurrentUserEffect() {
    const setCurrentUser = useSetRecoilState(currentUserState);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            const userCopy = JSON.parse(JSON.stringify(user));
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(userCopy);
        });

        return unsubscribe;
    }, [setCurrentUser]);
    return null;
}
