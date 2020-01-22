var socket = io();
var label = $('small');

var serchParams = new URLSearchParams(window.location.search);

if (!serchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = serchParams.get('escritorio');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);


$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {

        if (res === "no hay mas tickets") {
            alert(res);
            return;
        }

        label.text('ticket ' + res.numero);
    });
});