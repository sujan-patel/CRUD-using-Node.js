const mongoose = require('mongoose');
let blobSchema = new mongoose.Schema({
    name: { type: String },
    badge: { type: Number },
    dob: { type: Date, default: Date.now },
    isloved: { type: Boolean }
});

mongoose.model('Blob', blobSchema);