window.addEventListener("DOMContentLoaded", function(){
    const $args = [
        {title: "Banana", id: 025},
        {title: "Maçã", id: 584},
        {title: "Mamão", id: 545},
        {title: "Anora", id: 515},
        {title: "Batata", id: 556},
        {title: "dsf", id: 556},
        {title: "Batsdfsdata", id: 556},
        {title: "Batasdfsdta", id: 556},
        {title: "Badfsdftata", id: 556},
        {title: "Basdfdstata", id: 556}
    ];

    const $notKey = [
        "Banana",
        "Maçã",
        "Mamão",
        "Anora",
        "Batata"
    ];

    const elementQuery = document.querySelector("#productWoocommerce");

    const $settings = {
        keyAndValue: true,
        elementQuery: elementQuery,
        callback: function($id , $title){
            console.log($id);
            console.log($title);
            console.log("Callback esta funcionando");
        }
    }
    
    wc_autocomplete($settings, $args);

    const notifyOptions = {
        title: "Notify teste",
        message: "Mensage teste",
        icon: `<i class="fas fa-exclamation-triangle"></i>`,
        okText: "Ok",
        okAction: function(){
            console.log("Você apertou no OK");
        },
        cancelText: "Cancelar",
        cancelAction: function(){
            console.log("Você apertou em Cancelar");
        }
    }


    wc("#myNotify").notify(notifyOptions);
});