import i18next from 'i18next';

const options = {
  lng: 'en',
  fallbackLng: 'cz',
  resources: {
    en: {
      translation: require('./en/translation.json')
    },
    ru: {
      translation: require('./ru/translation.json')
    },
    cz: {
      translation: require('./cz/translation.json')
    }
  }
};

i18next.init(options);
