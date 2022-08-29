describe('Opening clear trip website', () => {
  it('Should open Website', () => {
    cy.visit("https://www.cleartrip.com/flights")
  })
})

describe('Selecting From', () => {
  it('Should select valid origin', () => {
    cy.get('input[class = "field bw-1 bs-solid w-100p p-2 box-border br-4 fs-2 c-neutral-900 h-8 bc-neutral-100 c-neutral-900 focus:bc-secondary-500 flex flex-middle flex-between t-all fs-2 focus:bc-secondary-500 bg-transparent bc-neutral-100 pr-2 pl-3 pt-2 pb-2 ba br-4 h-8 null"]')
    .clear().type("Bangalore").then (() => {
      cy.wait(1000)
      cy.get('div').get('[class = "bg-white br-4 elevation-5 p-1 p-absolute mt-1 z-50 l-0"]').children('ul').children('li').first()
      .click()
    })
  })
})

describe('Selecting To', () => {
  it('Should select valid destination', () => {
    cy.get('input[class = "field bw-1 bs-solid w-100p p-2 box-border br-4 fs-2 c-neutral-900 h-8 bc-neutral-100 c-neutral-900 focus:bc-secondary-500 flex flex-middle flex-between t-all fs-2 focus:bc-secondary-500 bg-transparent bc-neutral-100 pr-2 pl-3 pt-2 pb-2 ba br-4 h-8"]')
    .clear().type("Delhi").then (() => {
      cy.wait(1000)
      cy.get('div').get('[class = "bg-white br-4 elevation-5 p-1 p-absolute mt-1 z-50 l-0"]').children('ul').children('li').first()
      .click()
    })    
  })
})

describe('selecting date', () => {
  it('should get date', () => {
    var new_date = new Date(new Date().getTime()+(7*24*60*60*1000));
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[new_date.getDay()];
    var searchDay = '';
    searchDay = searchDay.concat(dayName,' ', new_date.getMonth(),' ', new_date.getDate(), ' ',new_date.getFullYear())
    cy.get('div').get('[class = "flex flex-middle flex-between p-relative homeCalender"]')
    .click()
    //have to select date dynamically
    cy.get('div').get('[aria-label*= "Sat Sep 03"]').click()
  })
})

describe('Book flight', () => {
  it('should book flight', () => {
    cy.get('div').get('button').contains('Search flights').click().then(() => {
      cy.get('button').contains('Book').click()
    })
  })
})

//new