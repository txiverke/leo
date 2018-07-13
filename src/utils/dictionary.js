// @flow

const dictionary = {
  es: {
    DESCRIPTION: 'Concurso de lectura en español.',
    NAME: 'Leo, leo'
  }
}

export const getDictionary = (lang = 'es') => dictionary[lang]