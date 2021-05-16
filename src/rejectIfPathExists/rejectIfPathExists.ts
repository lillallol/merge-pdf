import * as fs from "fs/promises";
import { errorMessages } from "../errorMessages";

/**
 * @description It returns a rejected promise if the provided path corresponds to a file or directory,
 * otherwise it returns a void fulfilled promise.
 */
export async function rejectIfPathExists(path: string): Promise<void> {
    const pathExist: boolean = await fs
        .access(path)
        .then(() => true)
        .catch(() => false);
    if (pathExist) throw Error(errorMessages.pathExist(path));
    else return undefined;
}
