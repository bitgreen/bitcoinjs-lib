// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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
