function abc(v, callback) {
  callback();
}

function def() {
  return;
}
abc("haha", def);
