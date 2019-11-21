module.exports = {
   '**/*.ts?(x)': ['prettier --write', 'git add -A'],
   '**/*.js?(x)': ['prettier --write', 'git add -A']
}
