const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );

class User {
    static instance = null;
    initSchema() {
        const schema = new Schema({
            'name': {
                'type': String,
                'required': true,
            },
            'username': {
                'type': String,
                'required': false,
            },
            'email': {
                'type': String,
                'required': true,
            },
            'address':{
                'type':  {
                            'street': {
                                'type': String,
                                'required': false,
                            },
                            'suite': {
                                'type': String,
                                'required': false,
                            },
                            'city': {
                                'type': String,
                                'required': false,
                            },
                            'zipcode': {
                                'type': String,
                                'required': false,
                            },
                            'geo': {
                                'type': {
                                    'lat': {
                                        'type': String,
                                        'required': false,
                                    },
                                    'lng': {
                                        'type': String,
                                        'required': false,
                                    },
                                },
                                'required': false,
                            },
                        },
                'required': false,
            },
            'phone':{
                'type': String,
                'required': false,
            },
            'website':{
                'type': String,
                'required': false,
            },
            'company':{
                'type': {
                            'name': {
                                'type': String,
                                'required': false,
                            },
                            'catchPhrase': {
                                'type': String,
                                'required': false,
                            },
                            'bs': {
                                'type': String,
                                'required': false,
                            },
                },
                'required': false,
            },
         
         
        }, { 'timestamps': true } );

        try {
            mongoose.model( 'User', schema );
        } catch ( e ) {
            throw e;
        }
    }

    getInstance() {
        if (!User.instance) {
            this.initSchema();
            User.instance = mongoose.model( 'User' );
        }        
        return User.instance;
    }
}

module.exports = { User };