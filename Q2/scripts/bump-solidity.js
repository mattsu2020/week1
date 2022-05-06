const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/
const verifierRegex_plok = /contract PlonkVerifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
//let bumped = content.replace(solidityRegex, 'pragma solidity ^0.6.11');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
let content_multi3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_multi3 = content_multi3.replace(solidityRegex, 'pragma solidity ^0.8.0');
//let bumped = content.replace(solidityRegex, 'pragma solidity ^0.6.11');
bumped_multi3 = bumped_multi3.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_multi3);

let content_plonk = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
let bumped_multi3_plonk = content_plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
//let bumped = content.replace(solidityRegex, 'pragma solidity ^0.6.11');
bumped_multi3_plonk = bumped_multi3_plonk.replace(verifierRegex_plok, 'contract Multiplier3Verifier_plonk');
fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", bumped_multi3_plonk);
