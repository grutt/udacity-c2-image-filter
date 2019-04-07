"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const child_process_1 = require("child_process");
(() => __awaiter(this, void 0, void 0, function* () {
    const app = express_1.default();
    const port = 8082; // default port to listen
    app.use(body_parser_1.default.json());
    //VERY BAD
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    // Root URI call
    app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const pythonProcess = child_process_1.spawn('python3', ["src/image_filter.py"]);
        if (pythonProcess !== undefined) {
            pythonProcess.stdout.on('data', (data) => {
                // Do something with the data returned from python script
                console.log(data.toString());
            });
        }
        res.send("pythonic");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map