import Api from './Api';
import MockApi from './MockApi';

//const MODE = 'development';
const MODE = 'production';

// Choose which API to use between MockApi and Api
let ApiHandler = null;
if (MODE === 'development') {
  ApiHandler = MockApi;
}
if (MODE === 'production') {
  ApiHandler = Api;
}

export default ApiHandler;
