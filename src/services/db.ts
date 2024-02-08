const mongoose = require('mongoose');

const uri = "mongodb+srv://FunPlanner:baAbKOF9SGoO2PcK@cluster0.xbhy0tz.mongodb.net/?retryWrites=true&w=majority";
const db = () => mongoose.connect(uri, {
    dbName: 'FunPlanner'
})
.then(() => {
    console.log('MongoDB connected…')
})
.catch((err: any) => console.log(err));


export default db;

