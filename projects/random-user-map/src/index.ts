// key
// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

import { User } from './User';
import { Company } from './Company';
import { customMap } from './customMap';

const custUser = new User();
const custmmap = new customMap('map');
const company = new Company();

custmmap.addMarker(custUser);
custmmap.addMarker(company);
