import localforage from 'localforage';

const storage = localforage.createInstance({
  name: 'storage'
});

const generateKeypair = () => {
  return window.crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256'
    },
    true,
    ['encrypt', 'decrypt']
  );
}

const fetchKeypair = () => {
  const keypair = [
    storage.getItem<ArrayBuffer>('publickey').then(importKey),
    storage.getItem<ArrayBuffer>('privatekey').then(importKey)
  ];

  return Promise.all(keypair)
    .then(([publicKey, privateKey]) => ({ publicKey, privateKey }))
    .catch(generateKeypair);
}

const fetchProfile = () => {
  // unimplemented

  return Promise.resolve();
}

const importKey = (key: ArrayBuffer) => {
  return window.crypto.subtle.importKey(
    'raw',
    key,
    'RSA-OAEP',
    true,
    ['encrypt', 'decrypt']
  );
}

type IdentityServiceOptions = {
  keypair: CryptoKeyPair,
  profile: any
};

export class IdentityService extends EventTarget {
  keypair: CryptoKeyPair;
  profile: any;

  constructor({ keypair, profile }: IdentityServiceOptions) {
    super();

    this.keypair = keypair;
    this.profile = profile;
  }

  static async initialize() {
    const [keypair, profile] = await Promise.all([fetchKeypair(), fetchProfile()]);

    return new IdentityService({ keypair, profile });
  }
}

