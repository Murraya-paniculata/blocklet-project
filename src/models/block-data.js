import { queryData } from '../utils/fetch';

export default {
  namespace: 'blockData',
  state: {
    loading: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *searchQuery({ payload = {} }, { call, put }) {
      const data = yield call(queryData, payload);
      if (!data.error) {
        yield put({ type: 'updateState', payload: data });
      }
    },
  },
  subscriptions: {
    querylatestblock() {
      // const latestblock = await querylatestblock();
    },
  },
};
