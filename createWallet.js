
//Bibliotecas
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { networks, payments } from 'bitcoinjs-lib';


//Rede
//const network = bitcoin.networks.bitcoin (Essa será a Mainnet)
const network = networks.testnet

//Derivação de carteira hierárquica determinística
//const path = `m/49'/1'/0'/0` (Essa será na Mainnet)
const path = `m/49'/1'/0'/0`

//Criar o mnemonico
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
//Criar raiz da conta
let root = bip32.default.fromSeed(seed, network)

//Criar a conta - par de chaves
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address 

console.log("Carteira gerada com sucesso")
console.log("Endereço:", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Minhas palavras:", mnemonic)
