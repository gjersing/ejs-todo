exports.getDate = function() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long'});
}

exports.getDay = function() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long'});
}

exports.getLongDay = function() {
  return new Date();
}
