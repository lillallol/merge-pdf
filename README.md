## Table of contents

- [Installation](#Installation)
- [Example](#Example)
- [Motivation](#Motivation)
- [Acknowledgments](#Acknowledgments)
- [License](#License)

## Installation

```bash
npm install @lillallol/merge-pdf
```

## Example
```js
const mergePdf = require("@lillallol/merge-pdf");

(async () => {
	await mergePdf("./merged.pdf", ["./0.pdf", "./1.pdf"]);
})();
```
## Motivation

I searched the npm registry for a module that :

- merges pdf
- it does not depend on other programming languages to be executed
- uses [pdf-lib](https://www.npmjs.com/package/pdf-lib)
- has high level API (the user does not need to make use of [fs](https://nodejs.org/api/fs.html))


to use in one of my projects <!--([documentation-to-pdf](@TODO))-->,and I could not find one, so I decided to create my own.

## Acknowledgments

I used the code from [this](https://github.com/Richienb/combine-pdfs) module.

## License

MIT License

Copyright (c) 2020 lillallol

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
