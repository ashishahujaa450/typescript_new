import { domData, renderLoader, clearLoader } from './View/base';

//model imports here
import { Location } from './Model/Location';
import { User } from './Model/User';
import { customMap, Mapable } from './Model/CustomMap';
import { Company } from './Model/Company';

//view imports here
import * as userView from './View/userView';
import * as companyView from './View/companyView';

/**
 * app state
 */

const state: { user: any; Company: any } = {
  user: {},
  Company: {}
};

/**
 * main app controller goes here
 */

/* user controller goes here */
const submitUser = async e => {
  //get query from form
  const userQuery = userView.getQueryUser();

  //validate form
  if (userView.validateQuery(userQuery)) {
    //create new user
    const newUser = new User(userQuery.name, userQuery.cityName);

    //render loading
    renderLoader();

    //get the location of the user city
    await newUser.getLocation();

    // store new user into state of app
    state.user = newUser;

    //ready ui
    clearLoader();
  } else {
    throw new Error('Please enter correct values');
  }
};

/**
 * company controller goes here
 */

const submitCompany = async e => {
  //get query from form
  const companyQuery = companyView.getQueryCompany();

  if (companyView.validateCompany(companyQuery)) {
    //create new compnay
    const newCompany = new Company(
      companyQuery.name,
      companyQuery.phrase,
      companyQuery.cityName
    );

    //render loading
    renderLoader();

    //get the location of the company
    await newCompany.getLocation();

    //store new compnay into state
    state.Company = newCompany;

    //ready ui
    clearLoader();
  } else {
    throw new Error('Please enter correct values');
  }
};

const createMap = (Userdata: Mapable, CompnayData: Mapable): void => {
  const newmap = new customMap('map');
  newmap.addMarker(Userdata);
  newmap.addMarker(CompnayData);
};

/* events goes here*/
domData.userForm.addEventListener('submit', e => {
  e.preventDefault();
  submitUser(e);
});

domData.companyForm.addEventListener('submit', e => {
  e.preventDefault();
  submitCompany(e);
});

//adding map event
domData.addMapBtn.addEventListener('click', e => {
  //adding map on ui with markers
  createMap(state.user, state.Company);
});
