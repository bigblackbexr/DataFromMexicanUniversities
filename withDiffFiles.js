import _,{ uniq } from './underscore-esm.js'
import universities from './university.js'
import campuses from './campus.js'
import careers from './career.js'

//SELECCIONAMOS ESTADO
let state = universities[5507]//9
console.log(state.university);

//BUSCAMOS UNIVERSIDADES EN BASE AL ESTADO SELECCIONADO
const primerFiltro = universities.filter( element => {return element.stateId === state.stateId})

//MOSTRAMOS 1 ELEMENTO DE UNIVERSIDADES EN BASE AL ESTADO SELECCIONADO
const segundoFiltro = _.uniq(primerFiltro, university => {return university.universityId})

//SELECCIONAMOS UNIVERSIDAD
const university = segundoFiltro[1]

//BUSCAMOS CAMPUSES EN BASE A LA UNIVERSIDAD SELECCIONADA
const tercerFiltro = campuses.filter( element => {return element.universityId === university.universityId})

//MOSTRAMOS 1 ELEMENTO DE CAMPUSES EN BASE A LA UNIVERSIDAD SELECCIONADA
const cuartoFiltro = _.uniq(tercerFiltro, campus => {return campus.campusId})
console.log(tercerFiltro);

//SELECCIONAMOS CAMPUS
const campus = cuartoFiltro[0]

//BUSCAMOS Y MOSTRAMOS TODAS LAS CARRERAS EN BASE AL CAMPUS SELECCIONADO
const end = careers.filter( element => {return element.campusId === campus.campusId})


// console.log(primerFiltro.length)
// console.log(segundoFiltro[0])
// console.log(segundoFiltro.length)
// console.log(tercerFiltro.length)
// console.log(cuartoFiltro)
// console.log(end)
// console.log(end.length)