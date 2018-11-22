class List {

  sum(list: number []): number {
    if (list !== null && list !== undefined) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    } return sum;
  }
}
}
export { List };
