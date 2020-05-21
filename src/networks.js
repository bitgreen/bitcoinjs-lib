'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18BitGreen Signed Message:\n',
  bech32: 'bg',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x26,
  scriptHash: 0x06,
  wif: 0x2e,
};
exports.regtest = {
  messagePrefix: '\x18BitGreen Signed Message:\n',
  bech32: 'bgrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x62,
  scriptHash: 0x0c,
  wif: 0x6c,
};
exports.testnet = {
  messagePrefix: '\x18BitGreen Signed Message:\n',
  bech32: 'tbg',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x62,
  scriptHash: 0x0c,
  wif: 0x6c,
};
