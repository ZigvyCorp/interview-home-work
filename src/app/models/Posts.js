const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Posts = new Schema({
    id: {type: Number,},
    title: { type: String, required: true},
    body: { type: String,},
    slug: { type: String, slug: 'title', unique: true}
}, { 
    id: false,
    timestamps: true,
});

// add plugin
Posts.plugin(AutoIncrement, {inc_field: 'id'});
mongoose.plugin(slug);
Posts.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all',
} );

module.exports = mongoose.model('Posts', Posts);