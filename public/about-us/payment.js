
function paymentProcess_dg() {



    var options = {
        "key": "rzp_live_HsE9LWd7JzPX0U", 
        "amount": 14999*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Deepta Manohar",
        "description": "3 months group Course by Deepta Manohar",
        "image": "5.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
        },
        "theme": {
            "color": "#528FF0"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}

function paymentProcess_di() {



    var options = {
        "key": "rzp_live_HsE9LWd7JzPX0U", 
        "amount": 24999*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Deepta Manohar",
        "description": "3 months 1 on 1 Course by Deepta Manohar",
        "image": "5.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
        },
        "theme": {
            "color": "#528FF0"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}
function paymentProcess_ri() {



    var options = {
        "key": "rzp_live_HsE9LWd7JzPX0U", 
        "amount": 9999*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Deepta Manohar",
        "description": "3 months Course by Ramya Koushik",
        "image": "5.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
        },
        "theme": {
            "color": "#528FF0"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}

function savetoDB(response) {
    console.log(response);
    window.location.href = "success.html";
}