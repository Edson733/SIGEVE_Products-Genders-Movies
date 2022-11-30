const {app} = require('./config/express'); //{app} app: app

const main = () => {
    try{
        app.listen(app.get("port"));
        console.log(`Server running in http://localhost:${app.get("port")}/`);
    }catch (err) {
        console.log(err);
    }

};

main();