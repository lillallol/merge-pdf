import { errorMessages } from "../errorMessages";
import { throwIfPathDoesNotEndWithPdf } from "./throwIfPathDoesNotEndWithPdf";

describe(throwIfPathDoesNotEndWithPdf.name, () => {
    it("throws error when the provided path does not end with .pdf", () => {
        const path = "./test";
        expect(() => throwIfPathDoesNotEndWithPdf(path)).toThrow(errorMessages.pathDoesNotEndWithPdf(path));
    });
    it("does not throws error when the provided path does end with .pdf", () => {
        expect(() => throwIfPathDoesNotEndWithPdf("./test.pdf")).not.toThrow();
    });
});
