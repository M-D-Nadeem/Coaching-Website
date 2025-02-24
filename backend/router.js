import express from 'express';
import { sendMail } from './controller/sendMail.js';
import { contactUsMail } from './controller/contactUsMail.js';

const router = express.Router();

router.post("/sendEnquiryMail/",sendMail);
router.post("/contactUsMail/",contactUsMail);

export default router
