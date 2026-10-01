// menu.js

const wines = [
    {
        "id": 1,
        "name": "Veličković Sauvignon Blanc 2021",
        "type": "bela",
        "price": "1150.00 RSD",
        "image": "img/menu/sauvignon blanc.jpg",
        "details": "-Sauvignon Blanc 100%<br>Belo suvo vino sa geografskim poreklom „Šumadija“<br>Proizvodnja: u inox sudovima.<br>Alc.14%vol.<br>Veličina boce - 0,75l<br>Posebno vino, koje ostavlja jak utisak. Ponosni smo na naš Sauvignon blanc koji je nastao kao proizvod nege, pažnje i posvećenosti i odličan je odraz podneblja na kojem se nalazi vinograd. Svetlo žute boje sa sivim i zelenim tonovima, srednjeg tela, ovo vino nosi bogatstvo aroma koje je izazov opisati. Pored karakteristične svežine i izražene mineralnosti, prvo će otkriti paradajz i zelenu papriku, orašasto voće, kisele granni smith jabuke, kao i tropsko citrusno voće kao što su crveni grejpfrut, pa čak i nar, i na kraju začinsko bilje. Vino elegantne, dugotrajne i intenzivne završnice. Sauvignon sa neobičnim potencijalom starenja."
      },      
      {
        "id": 2,
        "name": "Veličković Chardonnay 2021",
        "type": "bela",
        "price": "1000.00 RSD",
        "image": "img/menu/chardonnay.jpg",
        "details": "Chardonnay 100%<br>Belo suvo vino sa geografskim poreklom „Šumadija“ <br>Proizvodnja: u inox sudovima<br>Alc.14%vol.<br>Veličina boce - 0,75l<br>Skladno vino, koje odlikuje žućkasta boja sa zlatnim tonovima, intenzivnog mirisa jabuke, kruške i poljskog cveća, kojem teroar daje i dodatnu mineralnost. Harmoničan i elegantan Chardonnay, dopadljive svežine, srednjeg tela i prijatne završnice. Onakav kakav treba da bude. Vino sa odličnim potencijalom starenja."
      },      
      {
        "id": 3,
        "name": "Veličković Tamjanika 2022",
        "type": "bela",
        "price": "1150.00 RSD",
        "image": "img/menu/tamjanika.jpg",
        "details": "Tamjanika 100%<br>Belo suvo vino sa geografskim poreklom „Šumadija“<br>Proizvodnja: u inox sudovima<br>Alc.13%vol.<br>Veličina boce - 0,75l<br>Tamjanika koja nosi jak pečat podneblja na kojem se nalazi, s obzirom da odiše cvećem koje je isprepleteno neobičnom mineralnošću, ovo osvežavajuće vino, svetlo žute, slamaste boje i laganog tela, predstavlja pravo otkrovenje. Karakteristične sortne arome i mirisi koji ne opterećuju i bude osećaj prijatnosti svim čulima. Svežina i lakoća ovog vina predstavljaju pravo osveženje."
      },      
      {
        "id": 4,
        "name": "Veličković Kiss From A Rose 2021",
        "type": "roze",
        "price": "1100.00 RSD",
        "image": "img/menu/kiss.jpg",
        "details": "Prokupac 100%<br>Roze suvo vino<br>Proizvodnja: u inox sudovima<br>Alc.12%vol.<br>Veličina boce - 0,75l<br>Jedan od retkih roséa proizvedenih od čistog Prokupca. Lagano, lepršavo vino okarakterisano kao jako pitko i osvežavajuće. Vino roze boje, dobijene malo dužom maceracijom koja je obazbedila i svu raskoš koju ovo vino poseduje. Interesantno kod ovog rosea jeste nedvosmislen miris jagode i šumskog voća, bombona, kao i puterasta aroma. Vino koje ostavlja jak utisak jer daje više nego što se od njega očekuje."
      },      
      {
        "id": 5,
        "name": "Veličković Marbel Prokupac 2021",
        "type": "crvena",
        "price": "1350.00 RSD",
        "image": "img/menu/marbel.jpg",
        "details": "Prokupac 100%<br>Crveno suvo vino.<br>Proizvodnja: u inox sudovima<br>Alc.12%vol.<br>Veličina boce - 0,75l<br>Proizveden od autohtone sorte prokupac, naše prvo crveno vino nazvano po teroaru na kojem se nalazi. Lepota voćnih aroma i mirisa crvenog bobičastog voća sa primesama začina, uz 12% alkohola, srednje telo i prijatnu završnicu, čini Marbel jednim neopterećujućim crvenim vinom koje se lako pije."
      },      
      {
        "id": 6,
        "name": "Veličković Marselan 2020",
        "type": "crvena",
        "price": "1580.00 RSD",
        "image": "img/menu/marselan.jpg",
        "details": "Marselan 100%<br>Crveno suvo vino<br>Odležavanje: 11 meseci inox, 12 meseci barik (srpski hrast)<br>Alc. 14,5%vol.<br>Veličina boce - 0,75l<br>Kompleksno vino koje zahteva pažnju. Intenzivne rubin crvene boje i punog tela, bogato taninima, složeno i misteriozno vino koje odiše elegancijom. Na mirisu se osećaju voćne arome, kao što je intenzivan miris kupine i široka paleta mirisa crnog bobičastog voća. Odležavanjem u srpskom hrastu dobija mirise duvana, hrastovine, crne čokolade i bibera. Tragovi začinjenog zrelog voća i duga kompleksna završnica još uvek do kraja nedefinisana. S obzirom na veliki potencijal starenja, svako otvaranje boce predstavlja novi izazov: Šta će nam ovaj Marselan još ponuditi u budućnosti, ostaje da vidimo... Obavezno dekantiranje 30min."
      }      
  ];
  
  // Generating the menu dynamically
  const menuContainer = document.querySelector('.menu-container');
  const filterButtons = document.querySelectorAll('#menu-flters li');
  
  function generateMenuItems(filter) {
    menuContainer.innerHTML = '';
    const filteredWines = filter === '*' ? wines : wines.filter(wine => wine.type === filter);
  
    filteredWines.forEach(wine => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('col-lg-6', 'menu-item', `filter-${wine.type}`);
  
      menuItem.innerHTML = `
        <img src="${wine.image}" class="menu-img" alt="">
        <div class="menu-content">
          <a href="#">${wine.name}</a><span>${wine.price}</span>
        </div>
        <div class="menu-ingredients">${wine.details.substring(0, 200)}...</div>
        <div class="expand-text">Više...</div>
      `;
  
      menuItem.querySelector('.expand-text').addEventListener('click', () => showPopup(wine));
  
      menuContainer.appendChild(menuItem);
    });
  }
  
  generateMenuItems('*');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('#menu-flters .filter-active').classList.remove('filter-active');
      button.classList.add('filter-active');
  
      const filter = button.getAttribute('data-filter').replace('filter-', '');
      generateMenuItems(filter);
    });
  });
  
  // Popup functionality
  function showPopup(wine) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <h3>${wine.name}</h3>
        <img src="${wine.image}" alt="">
        <p>${wine.details}</p>
      </div>
    `;
  
    popup.querySelector('.close-btn').addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  
    document.body.appendChild(popup);
  }
  