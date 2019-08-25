module.exports = {
  '.*{js,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '.*{md,json,js,ts,tsx}': ['prettier --write', 'git add'],
  '*.{png,jpeg,jpg,gif}': ['imagemin-lint-staged', 'git add'],
  '*.svg': filenames => filenames.map(filename => `svgo --config .svgo.yml --input ${filename}`),
};
