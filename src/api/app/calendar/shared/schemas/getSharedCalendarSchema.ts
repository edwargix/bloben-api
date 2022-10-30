import { Segments } from 'celebrate';
import Joi from 'joi';

export const getSharedCalendarSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  }),
};
