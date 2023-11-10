const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );

class Comment {
    static instance = null;
    initSchema() {
        const schema = new Schema({
            'postId': {
                'type': Schema.Types.ObjectId,
                'required': true, 
                'ref': 'Post'
            },
            'name': {
                'type': String, 
                'required': true
            },
            'email': {
                'type': String, 
                'required': false
            },
            'body': {
                'type': String, 
                'required': true
            },
        }, { 'timestamps': true } );

        try {
            mongoose.model( 'Comment', schema );
        } catch ( e ) {
            throw e;
        }
    }

    getInstance() {
        if (!Comment.instance) {
            this.initSchema();
            Comment.instance = mongoose.model('Comment');
        }        
        return Comment.instance;
    }
}

module.exports = { Comment };
