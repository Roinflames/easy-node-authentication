module.exports = function(app, passport) {
// Fylesystem
    fs = require('fs')
    fs.readFile('./public/json/stock.json', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      stock = JSON.parse(data);
    });
//stock


// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login', { message: req.flash('loginMessage') });
        });

        app.get('/stock', function(req, res) {
            //Lectura de stock.json y asignación a variables
            createStock()
            res.render('stock', { message: req.flash('loginMessage'),
              //Nombre de variedad Cannabis
              nombre1:nombre1,nombre2:nombre2,nombre3:nombre3,nombre4:nombre4,nombre5:nombre5,nombre6:nombre6,nombre7:nombre7,nombre8:nombre8,nombre9:nombre9,nombre10:nombre10,
              nombre11:nombre11,nombre12:nombre12,nombre13:nombre13,nombre14:nombre14,nombre15:nombre15,nombre16:nombre16,nombre17:nombre17,nombre18:nombre18,nombre19:nombre19,
              nombre20:nombre20,nombre21:nombre21,
              //Tipo variedad Cannabis
              clasificacion1:clasificacion1,clasificacion2:clasificacion2,clasificacion3:clasificacion3,clasificacion4:clasificacion4,clasificacion5:clasificacion5,clasificacion6:clasificacion6,clasificacion7:clasificacion7,clasificacion8:clasificacion8,clasificacion9:clasificacion9,clasificacion10:clasificacion10,
              clasificacion11:clasificacion11,clasificacion12:clasificacion12,clasificacion13:clasificacion13,clasificacion14:clasificacion14,clasificacion15:clasificacion15,clasificacion16:clasificacion16,clasificacion17:clasificacion17,clasificacion18:clasificacion18,clasificacion19:clasificacion19,
              clasificacion20:clasificacion20,clasificacion21:clasificacion21,
              //%THC
              thc1:thc1,thc2:thc2,thc3:thc3,thc4:thc4,thc5:thc5,thc6:thc6,thc7:thc7,thc8:thc8,thc9:thc9,thc10:thc10,
              thc11:thc11,thc12:thc12,thc13:thc13,thc14:thc14,thc15:thc15,thc16:thc16,thc17:thc17,thc18:thc18,thc19:thc19,
              thc20:thc20,thc21:thc21,
              //%CBD
              cbd1:cbd1,cbd2:cbd2,cbd3:cbd3,cbd4:cbd4,cbd5:cbd5,cbd6:cbd6,cbd7:cbd7,cbd8:cbd8,cbd9:cbd9,cbd10:cbd10,
              cbd11:cbd11,cbd12:cbd12,cbd13:cbd13,cbd14:cbd14,cbd15:cbd15,cbd16:cbd16,cbd17:cbd17,cbd18:cbd18,cbd19:cbd19,
              cbd20:cbd20,cbd21:cbd21,
              //%CBN
              cbn1:cbn1,cbn2:cbn2,cbn3:cbn3,cbn4:cbn4,cbn5:cbn5,cbn6:cbn6,cbn7:cbn7,cbn8:cbn8,cbn9:cbn9,cbn10:cbn10,
              cbn11:cbn11,cbn12:cbn12,cbn13:cbn13,cbn14:cbn14,cbn15:cbn15,cbn16:cbn16,cbn17:cbn17,cbn18:cbn18,cbn19:cbn19,cbn20:cbn20,
              cbn21:cbn21,
              //%CNC
              cnc1:cnc1,cnc2:cnc2,cnc3:cnc3,cnc4:cnc4,cnc5:cnc5,cnc6:cnc6,cnc7:cnc7,cnc8:cnc8,cnc9:cnc9,cnc10:cnc10,
              cnc11:cnc11,cnc12:cnc12,cnc13:cnc13,cnc14:cnc14,cnc15:cnc15,cnc16:cnc16,cnc17:cnc17,cnc18:cnc18,cnc19:cnc19,cnc20:cnc20,
              cnc21:cnc21,
              //Existencias
              cantidad1:cantidad1, cantidad2:cantidad2, cantidad3:cantidad3, cantidad4:cantidad4,
              cantidad5:cantidad5, cantidad6:cantidad6, cantidad7:cantidad7, cantidad8:cantidad8,
              cantidad9:cantidad9, cantidad10:cantidad10, cantidad11:cantidad11, cantidad12:cantidad12,
              cantidad13:cantidad13, cantidad14:cantidad14, cantidad15:cantidad15, cantidad16:cantidad16,
              cantidad17:cantidad17, cantidad18:cantidad18, cantidad19:cantidad19, cantidad20:cantidad20,
              cantidad21:cantidad21,
              //Fichas descriptivas variedad Cannabis
            });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================
    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/');
        });
    });
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

function createStock() {
  var consultaFlor = stock.Flores
  //Nombres
  nombre1 = consultaFlor.n1.nombre, nombre2 = consultaFlor.n2.nombre, nombre3 = consultaFlor.n3.nombre,
  nombre4 = consultaFlor.n4.nombre, nombre5 = consultaFlor.n5.nombre, nombre6 = consultaFlor.n6.nombre,
  nombre7 = consultaFlor.n7.nombre, nombre8 = consultaFlor.n8.nombre, nombre9 = consultaFlor.n9.nombre,
  nombre10 = consultaFlor.n10.nombre, nombre11 = consultaFlor.n11.nombre, nombre12 = consultaFlor.n12.nombre,
  nombre13 = consultaFlor.n13.nombre, nombre14 = consultaFlor.n14.nombre, nombre15 = consultaFlor.n15.nombre,
  nombre16 = consultaFlor.n16.nombre, nombre17 = consultaFlor.n17.nombre, nombre18 = consultaFlor.n18.nombre,
  nombre19 = consultaFlor.n19.nombre, nombre20 = consultaFlor.n20.nombre, nombre21 = consultaFlor.n21.nombre
  //Variedades
  clasificacion1 = consultaFlor.n1.clasificacion, clasificacion2 = consultaFlor.n2.clasificacion, clasificacion3 = consultaFlor.n3.clasificacion,
  clasificacion4 = consultaFlor.n4.clasificacion, clasificacion5 = consultaFlor.n5.clasificacion, clasificacion6 = consultaFlor.n6.clasificacion,
  clasificacion7 = consultaFlor.n7.clasificacion, clasificacion8 = consultaFlor.n8.clasificacion, clasificacion9 = consultaFlor.n9.clasificacion,
  clasificacion10 = consultaFlor.n10.clasificacion, clasificacion11 = consultaFlor.n11.clasificacion, clasificacion12 = consultaFlor.n12.clasificacion,
  clasificacion13 = consultaFlor.n13.clasificacion, clasificacion14 = consultaFlor.n14.clasificacion, clasificacion15 = consultaFlor.n15.clasificacion,
  clasificacion16 = consultaFlor.n16.clasificacion, clasificacion17 = consultaFlor.n17.clasificacion, clasificacion18 = consultaFlor.n18.clasificacion,
  clasificacion19 = consultaFlor.n19.clasificacion, clasificacion20 = consultaFlor.n20.clasificacion, clasificacion21 = consultaFlor.n21.clasificacion
  //%thc
  thc1 = consultaFlor.n1.thc, thc2 = consultaFlor.n2.thc, thc3 = consultaFlor.n3.thc, thc4 = consultaFlor.n4.thc,
  thc5 = consultaFlor.n5.thc, thc6 = consultaFlor.n6.thc, thc7 = consultaFlor.n7.thc, thc8 = consultaFlor.n8.thc,
  thc9 = consultaFlor.n9.thc, thc10 = consultaFlor.n10.thc, thc11 = consultaFlor.n11.thc, thc12 = consultaFlor.n12.thc,
  thc13 = consultaFlor.n13.thc, thc14 = consultaFlor.n14.thc, thc15 = consultaFlor.n15.thc, thc16 = consultaFlor.n16.thc,
  thc17 = consultaFlor.n17.thc, thc18 = consultaFlor.n18.thc, thc19 = consultaFlor.n18.thc, thc20 = consultaFlor.n20.thc,
  thc21 = consultaFlor.n21.thc
  //%cbd
  cbd1 = consultaFlor.n1.cbd, cbd2 = consultaFlor.n2.cbd, cbd3 = consultaFlor.n3.cbd, cbd4 = consultaFlor.n4.cbd,
  cbd5 = consultaFlor.n5.cbd, cbd6 = consultaFlor.n6.cbd, cbd7 = consultaFlor.n7.cbd, cbd8 = consultaFlor.n8.cbd,
  cbd9 = consultaFlor.n9.cbd, cbd10 = consultaFlor.n10.cbd, cbd11 = consultaFlor.n11.cbd, cbd12 = consultaFlor.n12.cbd,
  cbd13 = consultaFlor.n13.cbd, cbd14 = consultaFlor.n14.cbd, cbd15 = consultaFlor.n15.cbd, cbd16 = consultaFlor.n16.cbd,
  cbd17 = consultaFlor.n17.cbd, cbd18 = consultaFlor.n18.cbd, cbd19 = consultaFlor.n19.cbd, cbd20 = consultaFlor.n20.cbd,
  cbd21 = consultaFlor.n21.cbd
  //%cbn
  cbn1 = consultaFlor.n1.cbn, cbn2 = consultaFlor.n2.cbn, cbn3 = consultaFlor.n3.cbn, cbn4 = consultaFlor.n4.cbn,
  cbn5 = consultaFlor.n5.cbn, cbn6 = consultaFlor.n6.cbn, cbn7 = consultaFlor.n7.cbn, cbn8 = consultaFlor.n8.cbn,
  cbn9 = consultaFlor.n9.cbn, cbn10 = consultaFlor.n10.cbn, cbn11 = consultaFlor.n11.cbn, cbn12 = consultaFlor.n12.cbn,
  cbn13 = consultaFlor.n13.cbn, cbn14 = consultaFlor.n14.cbn, cbn15 = consultaFlor.n15.cbn, cbn16 = consultaFlor.n15.cbn,
  cbn17 = consultaFlor.n17.cbn, cbn18 = consultaFlor.n18.cbn, cbn19 = consultaFlor.n19.cbn, cbn20 = consultaFlor.n20.cbn,
  cbn21 = consultaFlor.n21.cbn
  //%cnc
  cnc1 = consultaFlor.n1.cnc, cnc2 = consultaFlor.n2.cnc, cnc3 = consultaFlor.n3.cnc, cnc4 = consultaFlor.n4.cnc,
  cnc5 = consultaFlor.n5.cnc, cnc6 = consultaFlor.n6.cnc, cnc7 = consultaFlor.n7.cnc, cnc8 = consultaFlor.n8.cnc,
  cnc9 = consultaFlor.n9.cnc, cnc10 = consultaFlor.n10.cnc, cnc11 = consultaFlor.n11.cnc, cnc12 = consultaFlor.n12.cnc,
  cnc13 = consultaFlor.n13.cnc, cnc14 = consultaFlor.n14.cnc, cnc15 = consultaFlor.n15.cnc, cnc16 = consultaFlor.n15.cnc,
  cnc17 = consultaFlor.n17.cnc, cnc18 = consultaFlor.n18.cnc, cnc19 = consultaFlor.n19.cnc, cnc20 = consultaFlor.n20.cnc,
  cnc21 = consultaFlor.n21.cnc
  //Cantidades
  cantidad1 = consultaFlor.n1.cantidad, cantidad2 = consultaFlor.n2.cantidad, cantidad3 = consultaFlor.n3.cantidad,
  cantidad4 = consultaFlor.n4.cantidad, cantidad5 = consultaFlor.n5.cantidad, cantidad6 = consultaFlor.n6.cantidad,
  cantidad7 = consultaFlor.n7.cantidad, cantidad8 = consultaFlor.n8.cantidad, cantidad9 = consultaFlor.n9.cantidad,
  cantidad10 = consultaFlor.n10.cantidad, cantidad11 = consultaFlor.n11.cantidad, cantidad12 = consultaFlor.n12.cantidad,
  cantidad13 = consultaFlor.n13.cantidad, cantidad14 = consultaFlor.n14.cantidad, cantidad15 = consultaFlor.n15.cantidad,
  cantidad16 = consultaFlor.n16.cantidad, cantidad17 = consultaFlor.n17.cantidad, cantidad18 = consultaFlor.n18.cantidad,
  cantidad19 = consultaFlor.n19.cantidad, cantidad20 = consultaFlor.n20.cantidad, cantidad21 = consultaFlor.n21.cantidad
}
