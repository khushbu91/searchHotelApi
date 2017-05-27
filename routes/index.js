var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/hotels/query/:query', function(req, res, next) {
	var data = [
        {"name":"fabHotel New",
        "place":"New Delhi"
        },
        {"name":"TajHotel Ggn",
        "place":"Gurgaon"
        },
        {"name":"hotelFab New ggn",
        "place":"New Delhi"
        },
        {"name":"fabHotel old ggn",
        "place":"New Delhi"
        },
        {"name":"fabHotel old delhi",
        "place":"New Delhi"
        },
        {"name":"fabHotelOld NewDelhi",
        "place":"New Delhi"
        },
      ]
      var query = req.params.query;
       var suggestions = data.filter(function(data){
      if(data.name.indexOf(query)>-1 || data.place.indexOf(query)>-1){
        return data.name;
      }
    });
  res.json({ data: suggestions});
});

router.get('/hotels/query/', function(req, res, next) {
	var data = [
      ]
     
  res.json({ data: data});
});



module.exports = router;
