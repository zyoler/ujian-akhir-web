function include(file){
    const body = document.body;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../javascript/' + file + '.js';
        body.appendChild(script);
}
//index.html
include('dex-class');
include('dex-functions');
include('dex-api');
include('dex-design');

//chatbot.htm





//
