import { domData } from './base';
import { Validator } from './userView';

export const getQueryCompany = () => {
  return {
    name: domData.companyNameInput.value,
    cityName: domData.companyCityInput.value,
    phrase: domData.companyPhraseInput.value
  };
};

export const validateCompany = (companyInputs: Validator): boolean => {
  if (companyInputs.name && companyInputs.cityName) {
    return true;
  } else {
    return false;
  }
};
