import { Router, Request, Response } from "express";
import { upload } from "../middleware/multer.config";
import Project from "../models/ProjectModel";

const router = Router()

router.get('/projects',async (req: Request, res: Response) => {
    try {
        const projects = await Project.findAll();
        res.json(projects)
    }
    catch (error) {
        res.status(500).json({message:'Error al obtener los projectos'})
        console.log(error)
    }
})

router.post('/project', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const newProject = await Project.create({
            name, 
            description,
            imagePATH: req.file?.path
        });
        return res.status(201).json({
            message: 'proyecto creado con exito',
            project: newProject,
        });
    }
    catch (error) {
        res.status(400).json({message:'Error al crear el proyecto'})
        console.log(error)
    }
})
export default router;