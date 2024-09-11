import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Especialidad } from './especialidad.entity.js'

const em = orm.em

async function findAll(req: Request,res: Response) {
    try{
        const especialidades = await em.find(Especialidad, {})
        res.status(200).json({message: 'ok', data: especialidades})
    } catch (error:any) {
        res.status(500).json({ message: error.message })
    }
}

async function add(req: Request, res: Response) {
    
    try {
        const especialidad = em.create(Especialidad, req.body)
        await em.flush()
        res.status(201).json({message: 'ok', data: especialidad})
    }   catch (error:any) {
        res.status(500).json({ message: error.message })
    }
    
}

async function remove(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function update(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function findOne(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}


export { add, remove, update, findOne, findAll }