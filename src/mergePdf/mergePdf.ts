import { PDFDocument } from "pdf-lib";
import { readPdf } from "../readPdf/readPdf";
import { savePdf } from "../savePdf/savePdf";

import type { metadataToReturn } from "../types";

/**
 * @description It merges the provided pdf to a single pdf.
 * The paths and name can be relative or absolute paths.
 * It throws if the paths to the pdf files 
 * * do not end with extension `.pdf`
 * * do not exist
 * 
 * It throws when the path to save the pdf file
 * * does not end with extension `.pdf`
 * * the name already exists
*/
export async function mergePdf(
	name: string,
	paths: string[]
): Promise<metadataToReturn[]> {
	const mergedPdf = await PDFDocument.create();
	const metadataToReturn: metadataToReturn[] = [];
	for (let i = 0; i < paths.length; i++) {
		const pdfToCopy = await readPdf(paths[i]);
		const pageIndices = pdfToCopy.getPageIndices();
		metadataToReturn[i] = {
			numberOfPages: pageIndices.length,
		};
		//@TODO I do not really understand what is happening here and I am bored to do so
		const _ = await mergedPdf.copyPages(pdfToCopy, pageIndices);
		for (const __ of _) {
			await mergedPdf.addPage(__);
		}
		//
	}
	await savePdf(name, mergedPdf);
	return metadataToReturn;
}
