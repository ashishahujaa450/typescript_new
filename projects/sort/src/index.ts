import { Sorter } from './Sort';
import { numberCollection } from './numberColleciton';
import { characterCollection } from './characterCollection';
import { linkedList } from './linkedList';

const numCol = new numberCollection([15, -1, 3, 0, 22]);
numCol.sort();
console.log(numCol.data);

// const sorter = new Sorter(numCol);

// const charCol = new characterCollection('zyajmZ');

// sorter.sort();

// const sortt = new Sorter(charCol);
// sortt.sort();

// console.log(charCol.data);

// const lnkList = new linkedList();
// lnkList.add(500);
// lnkList.add(-10);
// lnkList.add(-4);
// lnkList.add(3);

// const sorter = new Sorter(lnkList);

// sorter.sort();
// console.log(lnkList.print());
