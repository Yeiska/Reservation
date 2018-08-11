$(".btn btn-lg btn-danger").on("click", function(event) {
    event.preventDefault();
    var newReservation= {
        name: $("#reserve_name").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        email: $("#reserve_email").val().trim(),
        uniqueId: $("#reserve_uniqueID").val().trim()
    };
    $.post("/api/new", newReservation)
    .then(function(data) {
        console.log(data);
        alert("Reservation Made")
    })
})