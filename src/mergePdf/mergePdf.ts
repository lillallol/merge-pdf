import type { mergePdfParameters, mergePdfReturnType } from "../publicApi";

import { PDFDocument } from "pdf-lib";
import { readPdf } from "../readPdf/readPdf";
import { savePdf } from "../savePdf/savePdf";

/**
 * @description
 * It merges the provided pdf to a single pdf.
 */
export const mergePdf: (parameters: mergePdfParameters) => Promise<mergePdfReturnType> = async (_) => {
    const { output, input } = _;

    const mergedPdf = await PDFDocument.create();
    const numberOfPages: number[] = [];
    for (let i = 0; i < input.length; i++) {
        const pdfToCopy = await readPdf(input[i]);
        const pageIndices = pdfToCopy.getPageIndices();
        numberOfPages[i] = pageIndices.length;
        const copiedPages = await mergedPdf.copyPages(pdfToCopy, pageIndices);
        for (const copiedPage of copiedPages) {
            await mergedPdf.addPage(copiedPage);
        }
    }
    if (output !== undefined) await savePdf(output, mergedPdf);

    return {
        numberOfPages,
        mergedPdf,
    };
};
