import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'netflix-app';

  navigatorLinks = [
    {
      name: 'Inicio',
      link: '#Inicio',
    },
    {
      name: 'Series',
      link: '#Series',
    },
    {
      name: 'Peliculas',
      link: '#Peliculas',
    },
    {
      name: 'Kids',
      link: '#Kids',
    },
    {
      name: 'Mi lista',
      link: '#Mi lista',
    },
  ];

  

    
     terrorFilms= [{
        section: "Terror",
        films: [
          {
            name: "Apostol",
            photo: "../../../assets/Terror/apostol.jpg"
          },
          {
            name: "calleterror",
            photo: "../../../assets/Terror/calleterror.jpg"
          }
          ,{
            name: "infiernoagua",
            photo: "../../../assets/Terror/infiernoagua.webp"
          },
          {
            name: "insidious2",
            photo: "../../../assets/Terror/insidious2.webp"
          },
          {
            name: "life",
            photo: "../../../assets/Terror/life.webp"
          },
          {
            name: "malasana",
            photo: "../../../assets/Terror/malasana.webp"
          },
          {
            name: "multiple",
            photo: "../../../assets/Terror/multiple.webp"
          },
          {
            name: "reflejos",
            photo: "../../../assets/Terror/reflejos.webp"
          }
          
        ]
     }
    ] 

    comediaFilms= [{
      section: "Comedia",
      films: [
        {
          name: "Casi 300",
          photo: "../../../assets/Comedia/casi300.webp"
        },
        {
          name: "cazafantasmas",
          photo: "../../../assets/Comedia/cazafantasmas.webp"
        },
        {
          name: "dictador",
          photo: "../../../assets/Comedia/dictador.webp"
        },
        {
          name: "erasehollywood",
          photo: "../../../assets/Comedia/erasehollywood.webp"
        },
        {
          name: "family guy",
          photo: "../../../assets/Comedia/family guy.webp"
        },
        {
          name: "juerga",
          photo: "../../../assets/Comedia/juerga.webp"
        },
        {
          name: "laterminal",
          photo: "../../../assets/Comedia/laterminal.webp"
        },
        {
          name: "padresella",
          photo: "../../../assets/Comedia/padresella.webp"
        }
      ]
   }
  ] 
  actionFilms= [{
    section: "Action",
    films: [
      {
        name: "ejercitomuertos",
        photo: "../../../assets/Accion/ejercitomuertos.jpg"
      },
      {
        name: "elprotector",
        photo: "../../../assets/Accion/elprotector.webp"
      },
      {
        name: "equalizer2",
        photo: "../../../assets/Accion/equalizer2.webp"
      },
      {
        name: "heat",
        photo: "../../../assets/Accion/heat.webp"
      },
      {
        name: "jackreacher",
        photo: "../../../assets/Accion/jackreacher.webp"
      },
      {
        name: "johnwick2",
        photo: "../../../assets/Accion/johnwick2.webp"
      },
      {
        name: "killbill2",
        photo: "../../../assets/Accion/killbill2.webp"
      },
      {
        name: "misionimposiblenacion",
        photo: "../../../assets/Accion/misionimposiblenacion.webp"
      }
    ]
 }
] 
dramaFilms= [{
  section: "drama",
  films: [
    {
      name: "1917",
      photo: "../../../assets/Drama/1917.webp"
    },
    {
      name: "arrival",
      photo: "../../../assets/Drama/arrival.webp"
    },
    {
      name: "clublucha",
      photo: "../../../assets/Drama/clublucha.webp"
    },
    {
      name: "corazones",
      photo: "../../../assets/Drama/corazones.webp"
    },
    {
      name: "culpable",
      photo: "../../../assets/Drama/culpable.jpg"
    },
    {
      name: "millaverde",
      photo: "../../../assets/Drama/millaverde.webp"
    },
    {
      name: "naufrago",
      photo: "../../../assets/Drama/naufrago.webp"
    },
    {
      name: "noespais.webp",
      photo: "../../../assets/Drama/noespais.webp"
    }

  ]
}
] 

scifiFilms= [{
  section: "Sci-fi",
  films: [
    {
      name: "6dia",
      photo: "../../../assets/Sci-fi/6dia.webp"
    },
    {
      name: "12monos",
      photo: "../../../assets/Sci-fi/12monos.webp"
    },
    {
      name: "afterearth",
      photo: "../../../assets/Sci-fi/afterearth.webp"
    },
    {
      name: "colverparadox",
      photo: "../../../assets/Sci-fi/colverparadox.jpg"
    },
    {
      name: "core",
      photo: "../../../assets/Sci-fi/core"
    },
    {
      name: "deepimpact",
      photo: "../../../assets/Sci-fi/deepimpact.webp"
    },
    {
      name: "doom",
      photo: "../../../assets/Sci-fi/doom.webp"
    },
    {
      name: "gits",
      photo: "../../../assets/Sci-fi/gits.webp"
    },

  ]
}
] 
topFilms= [{
  section: "Top 10",
  films: [
    {
      name: "1-papel",
      photo: "../../../assets/Top10/1-papel.webp"
    },
    {
      name: "2-reina",
      photo: "../../../assets/Top10/2-reina.webp"
    },
    {
      name: "3-titanes",
      photo: "../../../assets/Top10/3-titanes.webp"
    },
    {
      name: "4-lostinspace",
      photo: "../../../assets/Top10/4-lostinspace.webp"
    },
    {
      name: "5-dondecaben",
      photo: "../../../assets/Top10/5-dondecaben.webp"
    },
    {
      name: "6-aquinohay",
      photo: "../../../assets/Top10/6-aquinohay.webp"
    },
    {
      name: "7-blacklist",
      photo: "../../../assets/Top10/7-blacklist.webp"
    },
    {
      name: "8-ricos",
      photo: "../../../assets/Top10/8-ricos.webp"
    },
    {
      name: "9-poder",
      photo: "../../../assets/Top10/9-poder.webp"
    },
    {
      name: "10-gooddoctor",
      photo: "../../../assets/Top10/10-gooddoctor.webp"
    },

  ]
}
] 

}

