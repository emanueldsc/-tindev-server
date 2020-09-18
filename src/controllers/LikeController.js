const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { userId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(userId);

        if (!targetDev)
            return res.status(400).send({ error: 'Dev not exists' });

        if (targetDev.likes.includes(loggedDev._id))
            console.log('MATCH');

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.status(200).json(loggedDev);
    }
}