// PRODUCTOS
const mangas = [
    //SHONEN
  {
    productId: "shonen-1",
    productTitle: "One Piece",
    productImage: "./img/shonen/onePiece.webp",
    productDescription: "The story follows the adventures of Monkey D. Luffy and his crew",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 20
  },
  {
    productId: "shonen-2",
    productTitle: "Naruto",
    productImage: "./img/shonen/naruto.jpg",
    productDescription: "Naruto Uzumaki dreams of becoming the strongest ninja",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 10
  },
  {
    productId: "shonen-3",
    productTitle: "Hunter x Hunter",
    productImage: "./img/shonen/hxh.jpg",
    productDescription: "Gon Freecss aims to find his father and become a Hunter",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 15
  },
  {
    productId: "shonen-4",
    productTitle: "Jujutsu Kaisen",
    productImage: "./img/shonen/jujutsuKaisen.jpg",
    productDescription: "Yuji Itadori battles curses as a part of Jujutsu Tech",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 12
  },
  {
    productId: "shonen-5",
    productTitle: "Attack on Titan",
    productImage: "./img/shonen/attackTitan.webp",
    productDescription: "Humanity fights for survival against Titans",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 18
  },
  {
    productId: "shonen-6",
    productTitle: "Demon Slayer",
    productImage: "./img/shonen/demonSlayer.jpg",
    productDescription: "Tanjiro Kamado seeks to avenge his family and cure his sister",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 22
  },
  {
    productId: "shonen-7",
    productTitle: "Fullmetal Alchemist",
    productImage: "./img/shonen/fullmetalAlchemist.webp",
    productDescription: "Edward Elric searches for the Philosopher's Stone",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 16
  },
  {
    productId: "shonen-8",
    productTitle: "Bleach",
    productImage: "./img/shonen/bleach.webp",
    productDescription: "Ichigo Kurosaki becomes a Soul Reaper to protect the living world",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 14
  },
  {
    productId: "shonen-9",
    productTitle: "Jojo's Bizarre Adventure",
    productImage: "./img/shonen/jojos.jpg",
    productDescription: "The Joestar family battles supernatural forces through generations",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 19
  },
  {
    productId: "shonen-10",
    productTitle: "Black Clover",
    productImage: "./img/shonen/blackClover.webp",
    productDescription: "Asta strives to become the Wizard King despite not having magic",
    productStock: 10,
    productCategory: {
      name: "Shonen",
      id: "shonen"
    },
    productPrice: 17
  },
  //SHOJO
  {
    productId: "shojo-1",
    productTitle: "Orange",
    productImage: "./img/shojo/orange.jpg",
    productDescription: "A high school girl receives letters from her future self",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 13
  },
  {
    productId: "shojo-2",
    productTitle: "Lovely Complex",
    productImage: "./img/shojo/lovelyComplex.jpg",
    productDescription: "A tall girl and a short boy navigate their feelings for each other",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 11
  },
  {
    productId: "shojo-3",
    productTitle: "Cardcaptor Sakura",
    productImage: "./img/shojo/cardcaptorSakura.jpg",
    productDescription: "A young girl must retrieve magical cards she accidentally released",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 14
  },
  {
    productId: "shojo-4",
    productTitle: "Inuyasha",
    productImage: "./img/shojo/inuyasha.jpg",
    productDescription: "A girl travels back in time and helps a half-demon retrieve shards of a powerful jewel",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 15
  },
  {
    productId: "shojo-5",
    productTitle: "Sugar Sugar Rune",
    productImage: "./img/shojo/sugarSugarRune.jpg",
    productDescription: "Two witches compete to become queen by collecting human hearts",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 12
  },
  {
    productId: "shojo-6",
    productTitle: "Ranma 1/2",
    productImage: "./img/shojo/ranma.jpg",
    productDescription: "A martial artist has a curse that changes him into a girl when splashed with cold water",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 16
  },
  {
    productId: "shojo-7",
    productTitle: "Sailor Moon",
    productImage: "./img/shojo/sailorMoon.jpg",
    productDescription: "A teenage girl discovers her destiny as the guardian of justice",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 18
  },
  {
    productId: "shojo-8",
    productTitle: "Hamtaro",
    productImage: "./img/shojo/hamtaro.png",
    productDescription: "Adventures of a hamster and his hamster friends",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 10
  },
  {
    productId: "shojo-9",
    productTitle: "Maison Ikkoku",
    productImage: "./img/shojo/maisonIkkoku.jpg",
    productDescription: "A love story in a boarding house",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 17
  },
  {
    productId: "shojo-10",
    productTitle: "Candy Candy",
    productImage: "./img/shojo/candyCandy.jpg",
    productDescription: "The story of a girl named Candy and her search for love and happiness",
    productStock: 5,
    productCategory: {
      name: "Shojo",
      id: "shojo"
    },
    productPrice: 14
  },
  //SEINEN
  {
    productId: "seinen-01",
    productTitle: "Berserk",
    productImage: "./img/seinen/berserk.jpg",
    productDescription: "A dark fantasy series following the story of Guts, a lone mercenary",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 25
  },
  {
    productId: "seinen-02",
    productTitle: "Monster",
    productImage: "./img/seinen/monster.png",
    productDescription: "A doctor's pursuit of a former patient who has become a dangerous criminal",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 20
  },
  {
    productId: "seinen-03",
    productTitle: "Death Note",
    productImage: "./img/seinen/deathNote.jpg",
    productDescription: "A high school student discovers a supernatural notebook with deadly powers",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 18
  },
  {
    productId: "seinen-04",
    productTitle: "Akira",
    productImage: "./img/seinen/akira.jpg",
    productDescription: "A cyberpunk tale set in post-apocalyptic Tokyo",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 22
  },
  {
    productId: "seinen-05",
    productTitle: "Hellsing",
    productImage: "./img/seinen/hellsing.jpg",
    productDescription: "A secret organization fights supernatural threats and vampires",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 19
  },
  {
    productId: "seinen-06",
    productTitle: "Cowboy Bebop",
    productImage: "./img/seinen/cowboyBebop.jpg",
    productDescription: "Bounty hunters in space pursue criminals across the galaxy",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 23
  },
  {
    productId: "seinen-07",
    productTitle: "Dorohedoro",
    productImage: "./img/seinen/dorohedoro.jpg",
    productDescription: "A man seeks to regain his memories and humanity in a chaotic world",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 21
  },
  {
    productId: "seinen-08",
    productTitle: "Goodnight Punpun",
    productImage: "./img/seinen/goodnightPunpun.jpg",
    productDescription: "The life and struggles of a boy named Punpun from childhood to adulthood",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 26
  },
  {
    productId: "seinen-09",
    productTitle: "Neon Genesis Evangelion",
    productImage: "./img/seinen/neonGenesisEvangelion.jpg",
    productDescription: "Pilots battling mysterious beings in a post-apocalyptic world",
    productStock: 8,
    productCategory: {
      name: "Seinen",
      id: "seinen"
    },
    productPrice: 24
  },
    {
      productId: "seinen-10",
      productTitle: "Vinland Saga",
      productImage: "./img/seinen/vinlandSaga.jpg",
      productDescription: "Vikings seek revenge and fight for survival in a historical setting",
      productStock: 8,
      productCategory: {
        name: "Seinen",
        id: "seinen"
      },
      productPrice: 27,
    },
  //JOSEI
  {
    productId: "josei-01",
    productTitle: "Nana",
    productImage: "./img/josei/nana.jpg",
    productDescription: "Two women with the same name form an unlikely bond and pursue their dreams in Tokyo",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 18
  },
  {
    productId: "josei-02",
    productTitle: "Paradise Kiss",
    productImage: "./img/josei/paradiseKiss.jpg",
    productDescription: "A high school girl gets involved with a group of aspiring fashion designers",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 15
  },
  {
    productId: "josei-03",
    productTitle: "Given",
    productImage: "./img/josei/given.jpg",
    productDescription: "A boy finds solace in music and forms a band after meeting a fellow musician",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 13
  },
  {
    productId: "josei-04",
    productTitle: "Dakaretai Otoko",
    productImage: "./img/josei/dakaretaiOtoko.jpg",
    productDescription: "A romantic story between two actors in the entertainment industry",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 16
  },
  {
    productId: "josei-05",
    productTitle: "Honey Clover",
    productImage: "./img/josei/honeyClover.jpg",
    productDescription: "University students navigate life, relationships, and personal growth",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 14
  },
  {
    productId: "josei-06",
    productTitle: "Kids on the Slope",
    productImage: "./img/josei/kidsSlope.jpg",
    productDescription: "A story about friendship, music, and coming of age in the '60s",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 12
  },
  {
    productId: "josei-07",
    productTitle: "Yuri!! on Ice",
    productImage: "./img/josei/yuriIce.png",
    productDescription: "A figure skater's journey to success and romance in competitive ice skating",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 19
  },
  {
    productId: "josei-08",
    productTitle: "Gokusen",
    productImage: "./img/josei/gokusen.jpg",
    productDescription: "A teacher leads a double life as a yakuza heiress while mentoring delinquent students",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 17
  },
  {
    productId: "josei-09",
    productTitle: "Wotakoi",
    productImage: "./img/josei/wotakoi.jpg",
    productDescription: "Office workers navigate relationships while embracing their otaku lifestyles",
    productStock: 12,
    productCategory: {
      name: "Josei",
      id: "josei"
    },
    productPrice: 15
  },
  {
    productId: "josei-10",
    productTitle: "Chihayafuru",
    productImage: "./img/josei/chihayafuru.jpg",
    productDescription: "A girl discovers her passion for competitive karuta and forms lasting friendships",
    productStock: 12,
    productCategory: {
        name: "Josei",
        id: "josei"
    },
    productPrice: 20,
  }
  ];

const containerProducts = document.querySelector("#container-products");
const buttonsCategories = document.querySelectorAll(".btn-category");
const titlePrincipal = document.querySelector("#title-principal");
let btnsAdd = document.querySelectorAll(".product-add")
const numberCart = document.querySelector("#number-cart");

function loadProducts(chosenProducts) {
  containerProducts.innerHTML = "";

  chosenProducts.forEach(manga => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <img class="product-image" src=".${manga.productImage}" alt="${manga.productTitle}">
    <div class="product-details">
        <h3 class="product-title">${manga.productTitle}</h3>
        <p class="product-price">${manga.productPrice}</p>
        <button class="product-add" id="${manga.productId}">Add to cart</button>
    </div>
    `;

    containerProducts.append(div);

  })

  updateBtnsAdd();
}

loadProducts(mangas);

buttonsCategories.forEach(button => {
  button.addEventListener("click", (e) => {
      buttonsCategories.forEach(button => button.classList.remove("active"))
      e.currentTarget.classList.add("active")

      if (e.currentTarget.id != "all") {
        const btnTitle = mangas.find(manga => manga.productCategory.id === e.currentTarget.id)
        titlePrincipal.innerText = btnTitle.productCategory.name;

        const btnProducts = mangas.filter(manga => manga.productCategory.id === e.currentTarget.id)
        loadProducts(btnProducts)
      } else {
        titlePrincipal.innerText = "All the products"
        loadProducts(mangas)
      }
      
  })
})

function updateBtnsAdd() {
  btnsAdd = document.querySelectorAll(".product-add")

  btnsAdd.forEach(btn => {
    btn.addEventListener("click", addToCart)
  })
}

let mangasOnCart;
let mangasOnCartLS = localStorage.getItem("mangas-on-cart");

if (mangasOnCartLS) {
  mangasOnCart = JSON.parse(mangasOnCartLS);
  updateNumberCart();
} else {
  mangasOnCart = [];
}

function addToCart(e) {
  const btnId = e.currentTarget.id;
  const mangaAdded = mangas.find(manga => manga.productId === btnId);

  if (mangasOnCart.some(manga => manga.productId === btnId)) {
    const index = mangasOnCart.findIndex(manga => manga.productId === btnId);
    mangasOnCart[index].productAmount++;
  } else {
    mangaAdded.productAmount = 1;
    mangasOnCart.push(mangaAdded);
  }


  updateNumberCart()
  localStorage.setItem("mangas-on-cart", JSON.stringify(mangasOnCart));
}

function updateNumberCart() {
  let newNumberCart = mangasOnCart.reduce((acc, manga) => acc + manga.productAmount, 0);
  numberCart.innerText = newNumberCart;
}