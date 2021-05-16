import * as fs from "fs/promises";
import * as path from "path";

import { mergePdf } from "./mergePdf";
import { PDFDocument } from "pdf-lib";
import type { mergePdfReturnType } from "../publicApi";

let pathToMergedPdf: string;
let returnedValue: mergePdfReturnType;
const input = ["./1.pdf", "./2.pdf"];

beforeAll(async () => {
    pathToMergedPdf = path.resolve(__dirname, "./small.pdf");
    try {
        await fs.unlink(pathToMergedPdf);
    } catch (e) {
        //no problem if file does not exist
    }
    returnedValue = await mergePdf({
        output: pathToMergedPdf,
        input: input.map((inputPath) => path.resolve(__dirname, inputPath)),
    });
});

jest.setTimeout(30 * 60e3);

describe(mergePdf.name, () => {
    it("creates a merged pdf of the specified pdf and saves it in the output path", () => {
        expect(fs.access(pathToMergedPdf)).resolves.toBeUndefined();
    });
    it("returns an array that has elements the number of pages of each pdf", () => {
        expect(returnedValue.numberOfPages).toEqual([2, 3]);
    });
    it("returns the merged pdf", () => {
        expect(returnedValue.mergedPdf).toBeInstanceOf(PDFDocument);
    });
});
