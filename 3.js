let studenti =["Мыкола", "Петя", "Иван", "Александр","Костя"]
let ocenka =[90,75,55,81,69]

for (let i = 0; i < studenti.length; i++)
  if (ocenka[i] < 60)
    {console.log(studenti[i],"F")}
  else if (ocenka[i] < 70)
    {console.log(studenti[i],"D")}
  else if (ocenka[i] < 80)
    {console.log(studenti[i],"C")}
  else if (ocenka[i] < 90)
    {console.log(studenti[i],"B")}
  else if (ocenka[i] < 100)
    {console.log(studenti[i],"A")}

let srednee = 0
  for (let i = 0; i < studenti.length; i++)
    srednee += ocenka[i]

  if (srednee/ocenka.length < 60)
    {console.log("Среднее по классу: F")}
  else if (srednee/ocenka.length < 70)
    {console.log("Среднее по классу: D")}
  else if (srednee/ocenka.length < 80)
    {console.log("Среднее по классу: C")}
  else if (srednee/ocenka.length < 90)
    {console.log("Среднее по классу: B")}
  else if (srednee/ocenka.length < 100)
    {console.log("Среднее по классу: A")}