$(document).ready(function() {
    console.warn('document is ready.');

    $.get('/employee/getEmployees', function(data, status) {
        // console.log(data);
        renderTable(data);
    })

    renderTable = function(data) {
        for(var i=0; i<data.length; i++) {
            $('#employee-table').find('tbody')
            .append('<tr><td>' + data[i].first_name + '</td><td>' + data[i].last_name + '</td><td>' + data[i].email + '</td></tr>');
        }
    }
})

/*showImage = function() {
    $("#funny_image").removeClass("hidden");
    $("#showImage_button").addClass("hidden");
    $("#hideImage_button").removeClass("hidden");
}

hideImage = function() {
    $("#funny_image").addClass("hidden");
    $("#showImage_button").removeClass("hidden");
    $("#hideImage_button").addClass("hidden"); 
}
*/