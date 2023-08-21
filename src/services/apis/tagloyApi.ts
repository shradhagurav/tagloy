import { Request } from 'models';
import url from 'services/urls';

const tagloyApi = ({ get, post, put }: Request) => {
  const login = (params?: any) => {
    return get({ url: url.common.commonUrl.tagloy, params });
  };
  return {
   login,
  };
};

export default tagloyApi;
