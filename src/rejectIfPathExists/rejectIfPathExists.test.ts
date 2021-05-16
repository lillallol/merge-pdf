import * as path from "path";
import { errorMessages } from "../errorMessages";
import { rejectIfPathExists} from "./rejectIfPathExists";

describe(rejectIfPathExists.name, () => {
    it("returns a rejected promise when the provided path is a file/directory", async () => {
        const _path = path.resolve(__dirname);
        await expect(rejectIfPathExists(_path)).rejects.toThrow(errorMessages.pathExist(_path));
    });
    it("fulfils to void when for the provided path is not a file/directory", async () => {
        await expect(rejectIfPathExists(path.resolve(__dirname, "./test"))).resolves.toBe(undefined);
    });
});
