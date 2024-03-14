import { Router } from 'express'
import ProjectsRoutes from './ProjectsRoutes'

const router = Router()

router.use(ProjectsRoutes)

export default router
