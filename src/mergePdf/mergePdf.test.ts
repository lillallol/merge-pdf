import * as path from "path";
import * as fs from "fs/promises";
import { mergePdf } from "./mergePdf";
import type { metadataToReturn } from "../types";

let pathToMergedPdf: string;
let returnedValue: metadataToReturn[];

beforeAll(async () => {
	pathToMergedPdf = path.resolve(__dirname, "./merged.pdf");
	try {
		await fs.unlink(pathToMergedPdf);
	} catch (e) {
		//no problem if file does not exist
	}
	returnedValue = await mergePdf(pathToMergedPdf, [
		path.resolve(__dirname, "pages2.pdf"),
		path.resolve(__dirname, "pages3.pdf"),
	]);
});

describe("mergePdf(name,paths)", () => {
	it("creates a merged pdf of the specified pdf", () => {
		expect(fs.access(pathToMergedPdf)).resolves.toBeUndefined();
	});
	it("returns an array with metadata about each pdf that was used to create the merged pdf", () => {
		expect(returnedValue).toEqual([{ numberOfPages: 2 }, { numberOfPages: 3 }]);
	});
});
