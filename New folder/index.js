 series = "0 1";
 var x = 0;
 y = 1;
 n = 0;

 for (var i = 1; i < 10; i++) {
     n = x + y;
     x = y;
     y = n;
     series = series + n;
 }
 console.log(series);