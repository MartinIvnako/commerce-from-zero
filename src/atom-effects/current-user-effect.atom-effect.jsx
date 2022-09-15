import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "../atom/current-user-state.atom";

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export default function CurrentUserEffect() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

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
