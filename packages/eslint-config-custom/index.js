const validatePath = (path) => {
  const isPathCorrect = path.length > 0;
  return  isPathCorrect ? path : 'deu pau';
};


const eslintrc = (path) => {
  return (
    "extends": ['next', 'turbo', 'prettier', 'airbnb'],
    "rules": {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'warn',
      'import/jsx-props-no-spreading': 'off',
    },
    parserOptions: {
      project: '../../\'\$\{path\}\'/tsconfig/base.json',
    },
  }
  )
};

module.exports = eslintrc;