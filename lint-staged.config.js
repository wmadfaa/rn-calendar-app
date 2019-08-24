module.exports = {
  '.*{js,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '.*{md,json,js,ts,tsx}': ['prettier --write', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
};
