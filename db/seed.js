const Songs = require('../models/Songs')
const Artists = require('../models/Artists')
const songsData = require('./songsData.json')
const artistsData = require('./artistsData.json')


Songs.remove({}).then(() => {
  return Songs.collection.insert(songsData)
}).then(() => {
  process.exit()
})

Artists.remove({}).then(() => {
  return Artists.collection.insert(artistsData)
}).then(() => {
  process.exit()
})