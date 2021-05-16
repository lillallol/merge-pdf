export const errorMessages = {
    pathDoesNotEndWithPdf: (path: string): string => `Given path : ${path} does not end with ".pdf".`,
    pathExist: (path: string): string => `There is already a file or directory for the provided path "${path}".`,
};
