# Redis implementation in Node.js

This app uses Lufthansa API to demonstrate how to use caching.
It started as an implementation for Redis, but later other cache implementations were added. As it is coded to the interface rather than implementation you can easily switch between the different implementations for the purpose of comparisson.

Lufthansa dev docs:

#https://developer.lufthansa.com/docs/read/api_basics/Getting_Started


## Endpoints

### GET Flight schedules
`GET https://api.lufthansa.com/v1/operations/schedules/TXL/JFK/2019-09-20`

#### Headers
`Authorization: Bearer k9ccs8f33z63839urycsh2k9`

`Accept: application/json`
