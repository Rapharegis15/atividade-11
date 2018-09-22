function mostrartexto() {
document.getElementById('texto').style.display = 'block'}

function ocultartexto() {
    document.getElementById('texto').style.display = 'none'}

    function trocarcor() {
        document.getElementById('texto').style.color = 'red'}

        function cororiginal() {
            document.getElementById('texto').style.color = 'black'}
        
    
        function trocartexto() {
            var texto = document.getElementById('inputtext').value;
            document.getElementById('texto').innerHTML = texto;
        }