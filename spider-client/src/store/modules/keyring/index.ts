type State = {
  keypair: CryptoKeyPair,
};

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
    privatekey: null
  },
  mutations: {
    update(state: State, keypair: CryptoKeyPair) {
      state.keypair = keypair;
    }
  },
  actions: {
    // TODO: Correct type
    generate({ commit }: any) {
      return generateKey()
        .then((keypair) => (commit('update', keypair), keypair));
    }
  }
}
