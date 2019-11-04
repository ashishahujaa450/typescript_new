//convert string date into Date type
export const dateStringtoDate = (dateString: string): Date => {
  const dateNumArr = dateString.split('/').map((elm: string): number => {
    return parseInt(elm);
  });

  return new Date(dateNumArr[2], dateNumArr[1] - 1, dateNumArr[0]);
};
