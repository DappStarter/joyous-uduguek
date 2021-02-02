require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rival mushroom provide install clip slot gift'; 
let testAccounts = [
"0xb69d8489cbe80fc3b8b09aaeee874e8be536da0d07995701541f08478cb568d7",
"0x98fd95db8e9013aac2a7d18e0edab6aebad4f304b0e0df602dc754dbbb6ff377",
"0xe8937ef6a062f27f73b8a148528ecd6ab57f29780b702daa0590bc1268c1a7a6",
"0x82afdba1002bb8a2ac977fb7b0c00f469e0d0b17b61717c3156bad37a805ebaf",
"0x95ce94ee322bec6b56c4472ead530efdc323567a3db7565895654996ef2090f7",
"0x3ec6742e08b9eb3869a8ad8a1d80556839d1566dbaaa5a8e2809f841b4286e86",
"0x3b66e284c190daec09553a48b3148acb6bfa1de9c0a94a660b2e1e7756a58cfa",
"0x1c4b1dd9e7eac698df3b0ee3d72c07418784f2916f42c9e8be7bfec1d30d5488",
"0xded0aa29c5e4bd51489df6d9c44653ec5b0044bd2146fb94d4039dcc9779f224",
"0x94952a2a7b5728f205b1d5fb43a6533143769e8e2d30daf78238d826387addf4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
