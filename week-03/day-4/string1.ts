// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function replace(text: string): string {
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return replace(text.replace('x', 'y'));
  }
}

console.log(replace('scaocasxnsamoxnasancasmomxyy'));