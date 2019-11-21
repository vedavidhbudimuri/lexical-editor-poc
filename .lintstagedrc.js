module.exports = {
   '**/*.ts?(x)': ['eslint --fix', 'prettier --write', 'git add -A'],
   '**/*.js?(x)': ['eslint --fix', 'prettier --write', 'git add -A']
}
