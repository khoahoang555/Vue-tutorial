import counterMutations from '@/store/module/counter/mutations';
import counterActions from '@/store/module/counter/actions';
import counterGetters from '@/store/module/counter/getters';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
}
