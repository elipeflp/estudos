  function dayOfTheWeek (dia) {
    switch (dia) {
        case 1: 
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Digite um número válido de 1 à 7"
    }
  }

  console.log (dayOfTheWeek(6))