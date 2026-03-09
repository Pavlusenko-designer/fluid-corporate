export const singletonSchema = (type: string) => ({
  name: type,
  type,
  __i18n: false,
});

export const getDefaultLanguage = () => 'en';

export const defaultLanguages = [
  { id: 'en', title: 'English' },
];
