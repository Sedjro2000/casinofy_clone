const express = require('express');
const next = require('next');
const device = require('express-device');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Utilisez le middleware express-device pour détecter le type d'appareil
  server.use(device.capture());

  server.get('*', (req, res) => {
    const isMobile = req.device.type === 'phone';

    // Si c'est un mobile, redirigez vers la version mobile
    if (isMobile && !req.originalUrl.includes('/mobile')) {
      return res.redirect('/mobile' + req.originalUrl);
    }

    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
