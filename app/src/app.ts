import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes/api";
import mongoose from "mongoose";

class App {

    public app: express.Application = express();
    public routes: Routes = new Routes();
    // TODO secure mongodb access with username and password
    public mongoUrl: string = 'mongodb://mongo:27017/expressmongo';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routes.routes(this.app);
    }

    private config(): void{
        // access json and form data in requests
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        global.Promise = require('q').Promise;
        require('mongoose').Promise = global.Promise;
        // connect to mongodb
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

}

export default new App().app;