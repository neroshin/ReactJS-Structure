const ENV = {
  dev: {
    apiUrl: 'https://reqres.in/api/',
    apiDummyUrl: 'https://dummyjson.com/',
    googleMapsApiKey: 'your_dev_google_maps_api_key',
    oneSignalAppId: 'your_dev_onesignal_app_id',
  },
  staging: {
    apiUrl: 'https://reqres.in/api/',
    apiDummyUrl: 'https://dummyjson.com/',
    googleMapsApiKey: 'your_staging_google_maps_api_key',
    oneSignalAppId: 'your_staging_onesignal_app_id',
  },
  prod: {
    apiUrl: 'https://reqres.in/api/',
    apiDummyUrl: 'https://dummyjson.com/',
    googleMapsApiKey: 'your_prod_google_maps_api_key',
    oneSignalAppId: 'your_prod_onesignal_app_id',
  },
};

const getEnvVars = (env = "staging") => {
  
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;