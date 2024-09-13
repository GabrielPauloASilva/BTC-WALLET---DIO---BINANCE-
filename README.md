# BTC-WALLET---DIO---BINANCE-

Este repositório tem como foco a criação de uma carteira para Bitcoin, nele são criados as chaves públicas e privadas, assim como o mnemonico

1. No VS Code é necessário instalar o bip39, bip32 e o bitcoinjs-lib
   ``` npm i bip39 bip32@2.0.6 bitcoinjs-lib ```

2. 

```
//Bibliotecas
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { networks, payments } from 'bitcoinjs-lib';


//Rede
const network = networks.testnet

//Derivação de carteira hierárquica determinística
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
```

3. Após o comando ``` node .\createWallet.js ``` , teremos o resultado

![image](https://github.com/user-attachments/assets/c6d2ae66-0aec-4df2-bff8-53d13d41adf5)



4. Para completar, é necessário um gerenciador de carteiras
   
![Captura de tela 2024-09-13 140717](https://github.com/user-attachments/assets/a808f733-358e-4504-bcbb-2c41ed688121)

![Captura de tela 2024-09-13 140811](https://github.com/user-attachments/assets/7b09baf5-edfd-439c-8bf6-1a3d9eb712c1)

![Captura de tela 2024-09-13 140841](https://github.com/user-attachments/assets/0e18973b-50ad-4866-b018-64d057643b87)

![Captura de tela 2024-09-13 142147](https://github.com/user-attachments/assets/24324a64-65dc-4409-9dab-5112e547dcdd)

![Captura de tela 2024-09-13 142200](https://github.com/user-attachments/assets/dda37b8c-38b8-466a-a01e-c0fbfb708100)

![Captura de tela 2024-09-13 142223](https://github.com/user-attachments/assets/f6775eab-6b96-4bf2-b447-d437c44736b3)

![Captura de tela 2024-09-13 142238](https://github.com/user-attachments/assets/be1e3c56-4d86-4dd2-b00b-748b4bd6dbd8)

![Captura de tela 2024-09-13 142255](https://github.com/user-attachments/assets/a11427bc-cfaf-45e0-9978-ab9f439b5a3a)

5. Como teste, enviei Bitcoin Faucet na testnet
   
![Captura de tela 2024-09-13 142413](https://github.com/user-attachments/assets/3ce9419a-f70e-46b3-9bda-c3e5f4ee7617)

![Captura de tela 2024-09-13 142800](https://github.com/user-attachments/assets/4c884f03-28f0-4ea1-88cc-7462520bb2d3)

![Captura de tela 2024-09-13 142749](https://github.com/user-attachments/assets/3982b5e2-b8db-4d42-b21b-458f54c85689)


Observações:
Para a utilização da carteira na rede principal do Bitcoin, é preciso algumas alterações simples no código

1. 
```
const network = bitcoin.networks.bitcoin (Essa será a Mainnet)
```

2.
```
//const path = `m/49'/1'/0'/0` (Essa será na Mainnet)
```
