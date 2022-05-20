function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

const code = parseJwt(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsImlhdCI6MTY1MzAwMzU1N30.Acyks9Nb__BTT0Vvsx2hAolFoR1AVZzngF1vIChaKUc'
);
console.log(code);
