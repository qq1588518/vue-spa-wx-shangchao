/* global Promise : true */ // require
import axios            from 'axios'
import * as mockAPI     from '../../../services/mockAPI'
// const qs = require( 'qs' )

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const apiBulletinInfo = () => {
    return new Promise( function( resolve, reject ) {
        axios.get( mockAPI.BULLETIN ).then( response => {
            let resulData = response.data.data
            resolve( resulData )
            console.log( resulData )
        })
        .catch( error => {
            reject( error )
        })
    })
}

export const apiBulletinDetailsInfo = ( bulletinDetailsIdObj ) => {
    return new Promise( function( resolve, reject ) {
        axios.get( mockAPI.BULLETIN_DETAILS + `?id=${ bulletinDetailsIdObj.id }` )
        .then( response => {
            let resulData = response.data.data
            resolve( resulData )
        })
        .catch( error => {
            reject( error )
        })
    })
}
