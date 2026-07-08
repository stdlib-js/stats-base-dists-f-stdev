// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.2.3-esm/index.mjs";function n(n,r){var i;return s(n)||n<=0||s(r)||r<=4?NaN:(i=e*(r/(r-2)),i*=t((n+r-2)/(n*(r-4))))}export{n as default};
//# sourceMappingURL=index.mjs.map
