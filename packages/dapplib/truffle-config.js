require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind mixture harvest crime outer title'; 
let testAccounts = [
"0xaed96bd651abc0bf4a3693bed1071c44ecc7a049c98aca43bb89bca990c723bd",
"0x90cea095d78b0ddb0949604575f750ca73baed0e611dec17155a91b844a48740",
"0xe7fbc59207072db18594076a9c34ef95b42c3dc9e82a3bd0565d06e19ee21590",
"0xa70e3b636967a18310b507242f40bd4a0d4cd8f3561e1efb907f5f8c8869684a",
"0xe9dd0dc98a7adaa949394c5d6a1ee4d688be207a9e4c175dd144755b207b2ee3",
"0xd5c36410f4960b9b1206f74646391ccb39756968d8ff2041963e822b01a9ce93",
"0x83a06479b34d7554bda8c4e467512383ed25cc645e8096c986c999a1c393338f",
"0x0c5624d210ecf6a82bf056fe7cf5e60e70b7058a32668288710f66894a13a5e9",
"0xe81647f9025d6b68b699911cebe5656f7fc9144a7632dabe72b56dbfe85cb83c",
"0x21deaf09ed5e39cf4c124fdcc521974278f92182bf4ed8dc0086c4d03a0bbe1a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


