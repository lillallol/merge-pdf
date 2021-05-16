import { PDFDocument } from "pdf-lib";

import * as fs from "fs/promises";
import { throwIfPathDoesNotEndWithPdf } from "../common/throwIfPathDoesNotEndWithPdf";

/**
 * @description It reads the pdf file of the provide path, to return a PDFDocument instance of it.
 * It throws if the provided path does not end with `.pdf`.
 */
export async function readPdf(path: string): Promise<PDFDocument> {
    throwIfPathDoesNotEndWithPdf(path);
    return PDFDocument.load(await fs.readFile(path));
}
