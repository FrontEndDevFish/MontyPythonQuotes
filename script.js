const generateQuote = function() {
    const quotesArray = [
        {
            quote: "Come and see the violence inherent in the system. Help! Help! I’m being repressed!"
        },
        {
            quote: "Alright, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?"
        },
        {
            quote: "I'm not oppressing you, Stan. You haven't got a womb!"
        },
        {
            quote: "Where's the foetus going to gestate?! You going to keep it in a box?!"
        },
        {
            quote: "Larks' tongues. Otters' noses. Ocelot spleens."
        },
        {
            quote: "Well, tough titty for you, Fish Face."
        },
        {
            quote: "Look. I don't think it ought to be blasphemy, just saying 'Jehovah'."
        },
        {
            quote: "Spam! Spam! Spam! Spam! Spam! Spam!"
        },
         {
            quote: "Venezuelan beaver cheese?"
        },

    ];
        let arrayIndex = Math.floor(Math.random() * quotesArray.length);
        document.getElementById("quotes").innerHTML = quotesArray[arrayIndex].quote;
}
window.onload = function() {
    generateQuote();
    document.getElementById("generate-quote").addEventListener('click', generateQuote);
}