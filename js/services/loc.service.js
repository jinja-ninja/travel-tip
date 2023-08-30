import { utilService } from './util.service.js'

export const locService = {
  getLocs,
  saveLocs,
}

let gLocs = utilService.loadFromStorage('locations') || [
  {
    id: utilService.makeId(),
    name: 'Greatplace',
    lat: 32.047104,
    lng: 34.832384,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: utilService.makeId(),
    name: 'Neveragain',
    lat: 32.047201,
    lng: 34.832581,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

function getLocs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (gLocs) {
        resolve(gLocs)
      } else {
        reject('No locations found')
      }
    }, 2000)
  })
}

function saveLocs(name, lat, lng, weather = null) {
  return new Promise((resolve) => {
    const loc = {
      id: utilService.makeId(),
      name,
      lat,
      lng,
      weather,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    gLocs.push(loc)
    utilService.saveToStorage('locsDB', gLocs)

    resolve(loc)
  })
}
