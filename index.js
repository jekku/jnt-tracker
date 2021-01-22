'use strict'

const fetch = require('node-fetch')
const qs = require('querystring')

const track = (waybill) => {
  const queryParams = {
    'data[lang]': 'en',
    'data[source]': 3,
    'data[billcode]': waybill,
    method: 'app.findTrack'
  }

  return fetch(
    'https://www.jtexpress.ph/index/router/index.html',
    {
      method: 'POST',
      'Content-Type': 'application/json',
      body: qs.encode(queryParams)
    }
  ).then((result) => {
    return result.json()
  })
  .then((result) => {
    return JSON.parse(result.data)
  })
}
