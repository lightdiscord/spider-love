type State = {
  name: string,
  description: string,
  birth: string,
  gender: string,

  [key: string]: string
};

export default {
  namespaced: true,
  state: {
    name: null,
    description: null,
    birth: null,
    gender: 'other'
  },
  mutations: {
    update(state: State, payload: State) {
      Object.entries(payload)
        .filter(([key]) => ['name', 'description', 'birth', 'gender'].includes(key))
        .forEach(([key, value]: [string, string]) => {
          state[key] = value;
        });
    }
  }
}
