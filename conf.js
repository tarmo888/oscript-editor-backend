/* jslint node: true */
'use strict'
exports.port = null
// exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false
exports.bLight = false

exports.storage = 'sqlite'

// TOR is recommended. Uncomment the next two lines to enable it
// exports.socksHost = '127.0.0.1';
// exports.socksPort = 9050;

exports.hub = process.env.devnet ? 'localhost:6611' : (process.env.testnet ? 'obyte.org/bb-test' : 'obyte.org/bb');
exports.deviceName = 'oscript editor backend'
exports.permanent_pairing_secret = '*' // * allows to pair with any code, the code is passed as 2nd param to the pairing event handler
exports.control_addresses = ['']
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO'

exports.bIgnoreUnpairRequests = true
exports.bSingleAddress = true
exports.bStaticChangeAddress = true
exports.KEYS_FILENAME = 'keys.json'

// emails
exports.admin_email = ''
exports.from_email = ''
