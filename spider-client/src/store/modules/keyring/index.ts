import localforage from 'localforage';

export const generationState = {
  WORKING: Symbol(),
  DONE: Symbol()
};

type State = {
  ready: boolean,
  keypair: CryptoKeyPair,
};

const instance = localforage.createInstance({
  name: 'accountKeyring'
});

// TODO: Correct types
const storeKeys = ({ publicKey, privateKey }: any) => {
    const storePublic = window.crypto.subtle.exportKey('jwk', publicKey)
        .then((key) => instance.setItem('publickey', key));

    const storePrivate = window.crypto.subtle.exportKey('jwk', privateKey)
        .then((key) => instance.setItem('privatekey', key));

    return Promise.all([storePublic, storePrivate]);
}

// TODO: Correct types
export const createPlugin = () => {
  return (store: any) => {
    store.subscribe((mutation: any, state: State) => {
      if (mutation.type == 'account/keyring/update')
        return storeKeys(mutation.payload);
    });
  };
}

const generateKey = () => crypto.subtle.generateKey(
  {
    name: 'RSA-OAEP',
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: 'SHA-256',
  },
  true,
  ["encrypt", "decrypt"]
);

export default {
  namespaced: true,
  state: {
    ready: false,
    privatekey: null
  },
  mutations: {
    setReady(state: State, ready: boolean) {
      state.ready = ready;
    },

    update(state: State, keypair: CryptoKeyPair) {
      state.keypair = keypair;
    }
  },
  actions: {
    generate({ commit }: any) {
      commit('setReady', false);
      return generateKey()
        .then((keypair) => (commit('update', keypair), commit('setReady', true), keypair));
    }
  }
}
