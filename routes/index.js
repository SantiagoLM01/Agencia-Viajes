import express, { Router } from 'express'
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from '../controllers/paginaController.js';

import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio ) 
router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)


router.get('/testimoniales', paginaTestimoniales)
router.get('/contacto', (req,res) => { //req lo que enviamos , res lo que express nos responde
    res.send('Contacto')
})

router.post('/testimoniales' , guardarTestimonial)

export default router;