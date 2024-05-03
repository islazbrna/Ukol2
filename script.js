const jmeno = prompt('Zadejte vase křestní jméno bez diakritiky').trim().toLowerCase()
const prijmeni = prompt('Zadejte vase příjmení bez diakritiky').trim().toLowerCase()
document.body.innerHTML = `${prijmeni.slice(0,5)}${jmeno.slice(0,3)}@fit.cvut.cz
`