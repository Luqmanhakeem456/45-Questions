let Guest: string[] = ['Akram', 'Jalal', 'Faraz'];
let message: string = "I would like to invite you a dinner" ;
for(var i=0; i<Guest.length; i++){
    console.log(message + " " + Guest[i])
}

export{ Guest};