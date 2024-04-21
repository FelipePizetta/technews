import { addDoc, collection } from "firebase/firestore";
import { database } from "./database";

export async function salvarEmail(email: string) {
    try {
        await addDoc(collection(database, "contato"), {
            email: email,
        });
        return true;
    } catch(error) {
        console.error(error);
        return false;
    }
}