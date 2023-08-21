import commonController from 'services/urls/common';

const url = {
  common: commonController(),
};

const LOCAL = false;
const BASE_URL = __DEV__
  ? !LOCAL
    ? {
        // Development
        TAGLOY: 'https://swapi-graphql.netlify.app/.netlify/',
      }
    : {
        // local
        TAGLOY: 'https://swapi-graphql.netlify.app/.netlify/',
      }
  : {
      // Production
      TAGLOY: 'https://swapi-graphql.netlify.app/.netlify/',
    };

export {BASE_URL};

export default url;
