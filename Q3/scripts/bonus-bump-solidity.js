const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/SystemOfEquationsVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract SystemOfEquationsVerifier');

fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);

let content_less = fs.readFileSync("./contracts/LessThan10Verifier.sol", { encoding: 'utf-8' });
let bumped_less = content_less.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_less = bumped_less.replace(verifierRegex, 'contract LessThan10Verifier');

fs.writeFileSync("./contracts/LessThan10Verifier.sol", bumped_less);

let content_range = fs.readFileSync("./contracts/RangeProofVerifier.sol", { encoding: 'utf-8' });
let bumped_range = content_range.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_range = bumped_range.replace(verifierRegex, 'contract RangeProofVerifier');

fs.writeFileSync("./contracts/RangeProofVerifier.sol", bumped_range);
