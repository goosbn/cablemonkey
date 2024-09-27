var quotes = ['"Back in the glory days, we didn\'t use Vercel, we worked hard on our own websites!" - Teker, 2024', 'Insert quote here', 'ICH BIN DER RAAAAAAADDDDDDDDDDD! :D :D :D', 'Three', 'Bosanska Artiljerija', 'One good girl is worth a thousand [XXXXXXX], BOUND']

function funny() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function quote() {
    $('#quote').text(funny())
}

$(document).ready(function() {
    quote()
    twemoji.parse(document.body);
});

