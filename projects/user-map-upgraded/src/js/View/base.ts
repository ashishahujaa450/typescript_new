export const domData = {
  userForm: document.querySelector('form.userInfo'),
  userNameInput: document.querySelector('#u-name'),
  userCityInput: document.querySelector('#u-city'),
  companyForm: document.querySelector('form.companyInfo'),
  companyNameInput: document.querySelector('form.companyInfo input#c-name'),
  companyPhraseInput: document.querySelector('form.companyInfo input#c-phrase'),
  companyCityInput: document.querySelector('form.companyInfo input#c-city'),
  addMapBtn: document.querySelector('#showmapper')
};

export const renderLoader = (): void => {
  document.body.classList.add('loading');
};

export const clearLoader = (): void => {
  document.body.classList.remove('loading');
};
