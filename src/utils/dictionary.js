// @flow

const dictionary = {
  es: {
    DESCRIPTION: 'Concurso de lectura en español.',
    NAME: 'Leo, leo',
    NAV_BASES: 'Bases del concurso',
    NAV_CERTIFICADOS: 'Certificados',
    NAV_COLEGIOS: 'Colegios inscritos',
    NAV_CONCURSO: 'Concurso',
    NAV_GALERIA: 'Galeria',
    NAV_CRITERIOS: 'Criterios de lectores',
    NAV_INFO: 'Información para profesores',
    NAV_INSCRIPCION: 'Inscripción',
    NAV_TEXTOS: 'Textos de lectura'
  }
}

export const getDictionary = (lang = 'es') => dictionary[lang]