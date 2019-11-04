import { domData } from './base';

//common interface for user and company to validate
export interface Validator {
  name: string;
  cityName: string;
}

//getting user inputs value
export const getQueryUser = () => {
  return {
    name: domData.userNameInput.value,
    cityName: domData.userCityInput.value.toLowerCase()
  };
};

//validating user query
export const validateQuery = (userinputs: Validator): boolean => {
  if (userinputs.name && userinputs.cityName) {
    return true;
  } else {
    return false;
  }
};
