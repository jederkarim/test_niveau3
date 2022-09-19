function ex1() {
    T:[]
    var Per;
    var SMin;
    for (let i = T.length-1; i > -1 ; i--) {
       for (let j = 0; j < T.length; j++) {
        if (T[j]> T[j+1]) {
            Per = T[j]
            T[j] = T[j+1]
            T[j+1] = Per
        }
        
       }
        
    }
   return SMin = T[0] + T[1]
  }ex1()

