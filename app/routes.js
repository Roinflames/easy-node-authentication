module.exports = function(app, passport) {
    // Fylesystem
    fs = require('fs')
    fs.readFile('./public/json/data.json', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      stock = JSON.parse(data);
    });
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
            var consultaFlor = stock.Flores
            //Cantidades
            var variedad1 = "Índica", variedad2 = "Sativa", variedad3 = "Híbrido"

            var cantidad1 = consultaFlor.AK.cantidad, cantidad2 = consultaFlor.n2.cantidad, cantidad3 = consultaFlor.n3.cantidad,
            cantidad4 = consultaFlor.n4.cantidad, cantidad5 = consultaFlor.n5.cantidad, cantidad6 = consultaFlor.n6.cantidad,
            cantidad7 = consultaFlor.n7.cantidad, cantidad8 = consultaFlor.n8.cantidad, cantidad9 = consultaFlor.n9.cantidad,
            cantidad10 = consultaFlor.n10.cantidad, cantidad11 = consultaFlor.n11.cantidad, cantidad12 = consultaFlor.n12.cantidad,
            cantidad13 = consultaFlor.n13.cantidad, cantidad14 = consultaFlor.n14.cantidad, cantidad15 = consultaFlor.n15.cantidad,
            cantidad16 = consultaFlor.n16.cantidad, cantidad17 = consultaFlor.n17.cantidad, cantidad18 = consultaFlor.n18.cantidad,
            cantidad19 = consultaFlor.n19.cantidad, cantidad20 = consultaFlor.n20.cantidad, cantidad21 = consultaFlor.n21.cantidad
            //%thc
            var thc1 = consultaFlor.AK.thc, thc2 = consultaFlor.n2.thc, thc3 = consultaFlor.n3.thc, thc4 = consultaFlor.n4.thc,
            thc5 = consultaFlor.n5.thc, thc6 = consultaFlor.n6.thc, thc7 = consultaFlor.n7.thc, thc8 = consultaFlor.n8.thc,
            thc9 = consultaFlor.n9.thc, thc10 = consultaFlor.n10.thc, thc11 = consultaFlor.n11.thc, thc12 = consultaFlor.n12.thc,
            thc13 = consultaFlor.n13.thc, thc14 = consultaFlor.n14.thc, thc15 = consultaFlor.n15.thc, thc16 = consultaFlor.n16.thc,
            thc17 = consultaFlor.n17.thc, thc18 = consultaFlor.n18.thc, thc19 = consultaFlor.n18.thc, thc20 = consultaFlor.n20.thc,
            thc21 = consultaFlor.n21.thc

            var cbd1 = consultaFlor.AK.cbd, cbd2 = consultaFlor.n2.cbd, cbd3 = consultaFlor.n3.cbd, cbd4 = consultaFlor.n4.cbd,
            cbd5 = consultaFlor.n5.cbd, cbd6 = consultaFlor.n6.cbd, cbd7 = consultaFlor.n7.cbd, cbd8 = consultaFlor.n8.cbd,
            cbd9 = consultaFlor.n9.cbd, cbd10 = consultaFlor.n10.cbd, cbd11 = consultaFlor.n11.cbd, cbd12 = consultaFlor.n12.cbd,
            cbd13 = consultaFlor.n13.cbd, cbd14 = consultaFlor.n14.cbd, cbd15 = consultaFlor.n15.cbd, cbd16 = consultaFlor.n16.cbd,
            cbd17 = consultaFlor.n17.cbd, cbd18 = consultaFlor.n18.cbd, cbd19 = consultaFlor.n19.cbd, cbd20 = consultaFlor.n20.cbd,
            cbd21 = consultaFlor.n21.cbd

            var cbn1 = consultaFlor.AK.cbn, cbn2 = consultaFlor.n2.cbn, cbn3 = consultaFlor.n3.cbn, cbn4 = consultaFlor.n4.cbn,
            cbn5 = consultaFlor.n5.cbn, cbn6 = consultaFlor.n6.cbn, cbn7 = consultaFlor.n7.cbn, cbn8 = consultaFlor.n8.cbn,
             cbn9 = consultaFlor.n9.cbn, cbn10 = consultaFlor.n10.cbn, cbn11 = consultaFlor.n11.cbn, cbn12 = consultaFlor.n12.cbn,
             cbn13 = consultaFlor.n13.cbn, cbn14 = consultaFlor.n14.cbn, cbn15 = consultaFlor.n15.cbn, cbn16 = consultaFlor.n15.cbn,
             cbn17 = consultaFlor.n17.cbn, cbn18 = consultaFlor.n18.cbn, cbn19 = consultaFlor.n19.cbn, cbn20 = consultaFlor.n20.cbn,
             cbn21 = consultaFlor.n21.cbn

            var cnc1

            var ficha1

            res.render('stock', { message: req.flash('loginMessage'),

              indica:variedad1, sativa:variedad2, hibryd:variedad3,
              
              cantidad1:cantidad1, cantidad2:cantidad2, cantidad3:cantidad3, cantidad4:cantidad4,
              cantidad5:cantidad5, cantidad6:cantidad6, cantidad7:cantidad7, cantidad8:cantidad8,
              cantidad9:cantidad9, cantidad10:cantidad10, cantidad11:cantidad11, cantidad12:cantidad12,
              cantidad13:cantidad13, cantidad14:cantidad14, cantidad15:cantidad15, cantidad16:cantidad16,
              cantidad17:cantidad17, cantidad18:cantidad18, cantidad19:cantidad19, cantidad20:cantidad20,
              cantidad21:cantidad21,

              thc1:thc1,thc2:thc2,thc3:thc3,thc4:thc4,thc5:thc5,thc6:thc6,thc7:thc7,thc8:thc8,thc9:thc9,thc10:thc10,
              thc11:thc11,thc12:thc12,thc13:thc13,thc14:thc14,thc15:thc15,thc16:thc16,thc17:thc17,thc18:thc18,thc19:thc19,
              thc20:thc20,thc21:thc21,

              cbd1:cbd1,cbd2:cbd2,cbd3:cbd3,cbd4:cbd4,cbd5:cbd5,cbd6:cbd6,cbd7:cbd7,cbd8:cbd8,cbd9:cbd9,cbd10:cbd10,
              cbd11:cbd11,cbd12:cbd12,cbd13:cbd13,cbd14:cbd14,cbd15:cbd15,cbd16:cbd16,cbd17:cbd17,cbd18:cbd18,cbd19:cbd19,
              cbd20:cbd20,cbd21:cbd21,

              cbn1:cbn1,cbn2:cbn2,cbn3:cbn3,cbn4:cbn4,cbn5:cbn5,cbn6:cbn6,cbn7:cbn7,cbn8:cbn8,cbn9:cbn9,cbn10:cbn10,
              cbn11:cbn11,cbn12:cbn12,cbn13:cbn13,cbn14:cbn14,cbn15:cbn15,cbn16:cbn16,cbn17:cbn17,cbn18:cbn18,cbn19:cbn19,cbn20:cbn20,
              cbn21:cbn21,
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

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
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

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
