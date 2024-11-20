const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
// const uniqueValidator = require( 'mongoose-unique-validator' );

class Post {
    static instance = null;
    initSchema() {
        const schema = new Schema({
            'userId': {
                'type': Schema.Types.ObjectId,
                'required': true, 
                'ref': 'User'
            },
            'title': {
                'type': String, 
                'required': false
            },
            'body': {
                'type': String, 
                'required': false
            },
        }, { 'timestamps': true } );

        // schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'Post', schema );
        } catch ( e ) {
            throw e;
        }
    }

    getInstance() {
        if (!Post.instance) {
            this.initSchema();
            Post.instance = mongoose.model('Post');
        }        
        return Post.instance;
    }
}

module.exports = { Post };
