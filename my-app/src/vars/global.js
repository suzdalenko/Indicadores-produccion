export let gListArticles = () => {
    if (localStorage.getItem("initData")) {
    
        let initData = localStorage.getItem("initData");
        return JSON.parse(initData);
    }
    let initData = [
        {
            id: 1,
            num: 1,
            desc: "Bowl de salmón y quinoa",
            ritmoMin: 550,
            ritmoMax: 750,
            pesoNom: 1.000,
            pesoMax: 1.003
        },
        {
            id: 2,
            num: 2,
            desc: "Quinoa con Verduras 250g ECO",
            ritmoMin: 50,
            ritmoMax: 50,
            pesoNom: 500,
            pesoMax: 503
        },
        {
            id: 3,
            num: 3,
            desc: "Ensaladas Pic-Nic",
            ritmoMin: 50,
            ritmoMax: 50,
            pesoNom: 500,
            pesoMax: 503
        },
        {
            id: 4,
            num: 4,
            desc: "Albondigas vegetales",
            ritmoMin: 50,
            ritmoMax: 50,
            pesoNom: 500,
            pesoMax: 503
        }
    ]
    localStorage.setItem('initData', JSON.stringify(initData));
    return initData;
} 

