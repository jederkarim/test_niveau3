function ex2(){
    T:[]
    var S =0;
    var N = Number(prompt('Donner la taille du tableau'));

    for (let i = 0; i < N; i++) {
        if (T[i]>0 ) {
            S= S +T[i]
                    }
        console.log('la Somme de nombres positive dans le tableau est',S);
        
    }
}ex2();