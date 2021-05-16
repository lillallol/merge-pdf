import type { PDFDocument } from "pdf-lib";

export type mergePdfParameters = {
    /**
     * @description
     * Path to each pdf to be merged. Throws if any of the paths do not end with 
     * `.pdf`.
     */
    input: string[];
    /**
     * @description
     * Path to save the merged pdf. Throws if the provided path does not end 
     * with `.pdf` or a file with the same name can be accessed.
     */
    output?: string;
};

export type mergePdfReturnType = {
    /**
     * @description
     * The number of pages of each pdf that got merged.
     */
    numberOfPages: number[];
    mergedPdf: PDFDocument;
};
