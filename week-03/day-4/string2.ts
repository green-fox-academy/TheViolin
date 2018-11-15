// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function replace(text: string): string {
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return replace(text.replace('x', ''));
  }
}

console.log(replace('scaocasxnsamoxnasancasmomxyy'));