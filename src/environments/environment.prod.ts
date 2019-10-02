export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },
  PUBLIC_KEY : '',//
  HASH : '', // generado con https://www.md5hashgenerator.com/
  URL_API  : `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
};
