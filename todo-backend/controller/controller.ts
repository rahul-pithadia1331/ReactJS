import { Request, Response } from 'express';
import { ObjectId, isValidObjectId } from 'mongoose';
import { Items } from '../model';
import { IController } from './interface';

const controller: IController = {
    getItem: async (req: Request, res: Response): Promise<Response> => {
        try {
            const oItem = await Items.find({}, { _Id: 1, sItemName: 1 });
            return res
                .status(200)
                .json({ message: 'data fetched successfully', data: oItem });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    addItem: async (req: Request, res: Response): Promise<Response> => {
        try {
            if (!req.body.sItemName) {
                return res.status(400).json({ message: 'Item is missing' });
            }

            await new Items({
                sItemName: req.body.sItemName,
            }).save();

            return res.status(200).json({ message: 'Item added successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateItem: async (req: Request, res: Response): Promise<Response> => {
        try {
            if (!req.body.sId) {
                return res.status(400).json({ message: 'Item id is missing' });
            }

            if (!isValidObjectId(req.body.sId)) {
                return res.status(400).json({ message: 'Given id is invalid' });
            }

            const oItem = await Items.findOne({
                _id: req.body.sId,
            });

            console.log(oItem);

            if (!oItem) {
                return res.status(404).json({ message: 'Data not found' });
            }

            oItem.sItemName = req.body.sItemName;

            await oItem.save();

            return res
                .status(200)
                .json({ message: 'Update item successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    removeItem: async (req: Request, res: Response): Promise<Response> => {
        try {
            console.log(req.body);
            if (!req.body.sId) {
                return res.status(400).json({ message: 'Item id is missing' });
            }

            if (!isValidObjectId(req.body.sId)) {
                return res.status(400).json({ message: 'Given id is invalid' });
            }

            const oItem = await Items.findOne({
                _id: req.body.sId,
            });

            if (!oItem) {
                return res.status(404).json({ message: 'Data not found' });
            }

            oItem?.deleteOne();

            return res
                .status(200)
                .json({ message: ' Item removed successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default controller;
