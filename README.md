# merge-pdf

## Table of contents

<!--#region toc-->

- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Description](#description)
- [Code coverage](#code-coverage)
- [Documentation](#documentation)
    - [Concretions](#concretions)
        - [mergePdf](#----mergepdf)
- [Motivation](#motivation)
- [Acknowledgments](#acknowledgments)
- [Changelog](#changelog)
    - [2.0.0](#200)
    - [1.0.1](#101)
    - [1.0.0](#100)
- [License](#license)

<!--#endregion toc -->


## Installation

```bash
npm install @lillallol/merge-pdf
```

## Description

A high level API to merge pdf.

## Code coverage

Code coverage is around 90%.

## Documentation

<!--#region documentation ./documentation.md-->

<h3 id="-concretions">Concretions</h3>
<h4 id="-concretion-mergePdf">
    mergePdf
</h4>

```ts
/**
 * @description
 * It merges the provided pdf to a single pdf.
 */
export declare const mergePdf: (parameters: mergePdfParameters) => Promise<mergePdfReturnType>;
```

<details open="">
<summary id="-concretion-mergePdf-references">
    <a href="#-concretion-mergePdf-references">#</a>
    references
</summary>

<br>


<blockquote>
<details>
<summary id="-concretion-mergePdf-references-mergePdfParameters">
    <a href="#-concretion-mergePdf-references-mergePdfParameters">#</a>
    <b>mergePdfParameters</b>
</summary>
        
```ts
export declare type mergePdfParameters = {
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
```



</details>
<details>
<summary id="-concretion-mergePdf-references-mergePdfReturnType">
    <a href="#-concretion-mergePdf-references-mergePdfReturnType">#</a>
    <b>mergePdfReturnType</b>
</summary>
        
```ts
export declare type mergePdfReturnType = {
    /**
     * @description
     * The number of pages of each pdf that got merged.
     */
    numberOfPages: number[];
    mergedPdf: PDFDocument;
};
```



</details>
<blockquote>
<details>
<summary id="-concretion-mergePdf-references-mergePdfReturnType-PDFDocument">
    <a href="#-concretion-mergePdf-references-mergePdfReturnType-PDFDocument">#</a>
    <b>PDFDocument</b>
</summary>
        
```ts
import type { PDFDocument } from "pdf-lib";
```



</details>

</blockquote>
</blockquote>
</details>
<hr>


<!--#endregion documentation-->

## Motivation

I searched the npm registry for a module that :

-   merges pdf
-   uses only javascript (i.e. does not use code from other programming languages to merge the pdf)
-   has high level API (the user does not need to make use of [fs](https://nodejs.org/api/fs.html))

because I had to use in one of my own projects ([scrap-it](https://github.com/lillallol/scrapt-it)), and I could not find one, so I decided to create my own.

## Acknowledgments

-   I used the code from [this](https://github.com/Richienb/combine-pdfs) module as a starting point.
-   Without [pdf-lib](https://github.com/Hopding/pdf-lib) this module would not be possible.

## Changelog

### 2.0.0

**Breaking changes**

The parameters of `mergePdf` are a now a single object, and its return value has a property that holds a reference to the merged pdf document. The latter makes the output path in the parameter object be an optional property.

**Other**

-   Added generated documentation from [ts-doc-gen-md](https://github.com/lillallol/ts-doc-gen-md) to `README.md`.
-   Added changelog to `README.md`.

### 1.0.1

Minor internal changes.

### 1.0.0

Published the package.

## License

MIT
