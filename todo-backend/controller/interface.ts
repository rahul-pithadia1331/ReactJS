import { Request, Response } from "express";

interface IController{
    updateItem: (req: Request, res: Response) => Promise<Response>;
    addItem : (req: Request, res: Response) => Promise<Response>;
    getItem : (req: Request, res: Response) => Promise<Response>;
    removeItem: (req: Request, res: Response) => Promise<Response>;
}

export {IController};