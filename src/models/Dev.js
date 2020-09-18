const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: { type: String, required: true },
    user: { type: String, required: true },
    // quando for passada apenas o tipo, não é necessário pasar um bojeto completo.
    bio: String,
    avatar: { type: String, required: true },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
    /**
     * Esse campo cria 2 campos no banco dedados -> createAt e updateAt
     * createAt -> data de criação do registro
     * updateAt -> data da ultima atualização do registro
     */
    timestamps: true
});

// model(<nome da coleção no banco>, <Schema do objeto que vai ser inserido na coleção>)
module.exports = model('Dev', DevSchema);