$(function(){

    $("#weather-form").on('submit', function (e) {
        e.preventDefault();
        $('#weather-detail').show();
        $.post(this.action, $(this).serialize(),function (result) {
            var tableContent = '';
            var data = $.parseJSON(result);
            if(data.current_observation !== undefined){

                tableContent += '<tr>';
                    tableContent += '<td>' + data.current_observation.display_location['city'] + '</td>';
                    tableContent += '<td>' + data.current_observation['temp_c'] + '</td>';
                    tableContent += '<td>' + data.current_observation['relative_humidity'] + '</td>';
                    tableContent += '<td>' + data.current_observation['pressure_in'] + '</td>';
                    tableContent += '<td>' + data.current_observation['visibility_km'] + '</td>';
                tableContent += '</tr>';
                $('#weather-detail table tbody').append(tableContent);
            }
        });
    });
});