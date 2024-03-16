"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = require("../middleware/multer.config");
const ProjectModel_1 = __importDefault(require("../models/ProjectModel"));
const router = (0, express_1.Router)();
router.get('/projects', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield ProjectModel_1.default.findAll();
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los projectos' });
        console.log(error);
    }
}));
router.post('/project', multer_config_1.upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, description } = req.body;
        const newProject = yield ProjectModel_1.default.create({
            name,
            description,
            imagePATH: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path
        });
        return res.status(201).json({
            message: 'proyecto creado con exito',
            project: newProject,
        });
    }
    catch (error) {
        res.status(400).json({ message: 'Error al crear el proyecto' });
        console.log(error);
    }
}));
exports.default = router;
