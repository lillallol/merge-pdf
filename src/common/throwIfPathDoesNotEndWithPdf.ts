import { errorMessages } from "../errorMessages";

/**
 * @description It throws error if the provided path does not end with `.pdf`.
*/
export function throwIfPathDoesNotEndWithPdf(path: string):void {
    if (!/\.pdf$/.test(path)) throw Error(errorMessages.pathDoesNotEndWithPdf(path));
}
