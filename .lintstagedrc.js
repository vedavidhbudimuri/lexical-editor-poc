module.exports = {
   '**/*.ts?(x),!src/utils/AuthAPIUtils.ts,!src/Common/utils/APIUtils.ts': [
      'eslint --fix',
      'prettier --write',
      'git add -A'
   ],
   '**/*.js?(x),!src/utils/AuthAPIUtils.ts,!src/Common/utils/APIUtils.ts': [
      'eslint --fix',
      'prettier --write',
      'git add -A'
   ],
   '*.json?(x)': ['prettier --write', 'git add -A'],
   '*.md?(x)': ['prettier --write', 'git add -A']
}
