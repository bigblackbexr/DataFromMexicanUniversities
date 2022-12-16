import _,{ uniq } from './underscore-esm.js'
import full from './full.js'

//Mostramos todos los estados
const states = _.uniq(full, state => {return state.stateId})

//Estado seleccionado
const stateSelected = states[8].stateId
console.log('Estado seleccionado -> ',stateSelected)

//Buscamos todas las universidades en base al estado seleccionado
const universities = full.filter(element => {return element.stateId===stateSelected})
//Lista sin duplicados
const uni = _.uniq(universities, university => {return university.universityId})

//Universidad seleccionada
const universitySelected = uni[1].universityId
console.log('Universidad seleccionada -> ',universitySelected)

//Buscamos todos los campuses en base al estado seleccionado y la universidad seleccionada
const campuses = full.filter(element => {return element.stateId===stateSelected && element.universityId===universitySelected})
//Lista sin duplicados
const camp = _.uniq(campuses, campus => {return campus.campusId})

//Campus seleccionado
const campusSelected = camp[0].campusId
console.log('Campus seleccionado ->',campusSelected)

//Buscamos todas las carreras en base al campus seleccionado
const careers = full.filter(element => {return element.stateId===stateSelected && element.universityId===universitySelected && element.campusId===campusSelected})

console.log(careers.length);