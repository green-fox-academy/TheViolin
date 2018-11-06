function get_mx(mx_size: number) {
  let mx = new Array();
  for (let row = 0; row < mx_size; row++) {
    mx.push(new Array());
    for (let col = 0; col < mx_size; col++) {
      if (col == mx_size - row - 1) {
        mx[row].push(1);
      } else {
        mx[row].push(0);
      }
    }
  }

  // At this point mx is created

  // Write mx to console row by row
  for (let row = 0; row < mx_size; row++) {
    console.log(mx[row]);
  }
  //console.log(mx);
}

get_mx(10);