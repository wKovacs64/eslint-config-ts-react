module.exports = {
  extends: ['@wkovacs64/eslint-config-react', '@wkovacs64/eslint-config-ts'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
