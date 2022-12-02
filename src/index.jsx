import dav from 'dva';
import createLoading from 'dva-loading';
import App from './app';
import searchResultModel from './models/block-data';

const app = dav();

app.use(createLoading());

app.model(searchResultModel);

app.router(App);

app.start('#app');
