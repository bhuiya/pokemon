let pokemon_1 = document.getElementById('a_pokemon');
let pokemon_2 = document.getElementById('b_pokemon');
let pokemon_3 = document.getElementById('c_pokemon');



pokemon_1.addEventListener("click", function displayvalue(event) {

  event.preventDefault();
  let temp1 = document.getElementById('a_pokemon').getAttribute('data-value');

  let str_normal1 = 'https://pokeapi.co/api/v2/pokemon/' + temp1 + '/';

  let pokemon1 = new pokemon();
  this.temp = temp1;
  pokemon1.setvalue(str_normal1);

  setTimeout(function() {


    pokemon1.get_abilities();
    pokemon1.get_defense_value();
    pokemon1.get_hp_value();
    pokemon1.get_attack_value();
    pokemon1.get_images(temp1);
  }, 2500);


});

pokemon_2.addEventListener("click", function displayvalue1(event) {

  event.preventDefault();

  let temp2 = document.getElementById('b_pokemon').getAttribute('data-value');
  let str_normal2 = 'https://pokeapi.co/api/v2/pokemon/' + temp2 + '/';

  let pokemon2 = new pokemon();
  pokemon2.setvalue(str_normal2);

  setTimeout(function() {
    pokemon2.get_abilities();
    pokemon2.get_defense_value();
    pokemon2.get_hp_value();
    pokemon2.get_attack_value();
    pokemon2.get_images(temp2);
  }, 2500);


});

pokemon_3.addEventListener("click", function displayvalue2(event) {

  event.preventDefault();

  let temp3 = document.getElementById('c_pokemon').getAttribute('data-value');
  let str_normal3 = 'https://pokeapi.co/api/v2/pokemon/' + temp3 + '/';

  let pokemon3 = new pokemon();
  pokemon3.setvalue(str_normal3);


  setTimeout(function() {
    pokemon3.get_abilities();
    pokemon3.get_defense_value();
    pokemon3.get_hp_value();
    pokemon3.get_attack_value();
    pokemon3.get_images(temp3);
  }, 2500);


});



class pokemon {


  constructor() {
    this.abilities1 = "";
    this.abilities2 = "";
    this.defense = "";
    this.hp = "";
    this.attack = "";
    this.temp = "";

  }

  setvalue(func_str) {
    let self = this;
    let abilities1, abilities2, defense, hp, attack;

    var req = axios.get(func_str).then(function(myResponse) {

      self.abilities1 = (myResponse.data.abilities[0].ability.name).toString();
      self.abilities2 = myResponse.data.abilities[1].ability.name;
      self.defense = myResponse.data.stats[3].base_stat;
      self.hp = myResponse.data.stats[5].base_stat;
      self.attack = myResponse.data.stats[4].base_stat;

    });



  }

  get_abilities() {
    let span1 = document.getElementById('span_1');
    span1.innerHTML = "";
    span1.innerHTML = this.abilities1;
    let span2 = document.getElementById('span_2');
    span2.innerHTML = "";
    span2.innerHTML = this.abilities2;

  }


  get_defense_value() {

    let span3 = document.getElementById('span_3');
    span3.innerHTML = "";
    span3.innerHTML = this.defense;

  }

  get_hp_value() {


    let span4 = document.getElementById('span_4');
    span4.innerHTML = "";
    span4.innerHTML = this.hp;

  }

  get_attack_value() {
    let span5 = document.getElementById('span_5');
    span5.innerHTML = "";
    span5.innerHTML = this.attack;

  }
  get_images(temp) {
    let image = document.getElementById('my_image');
    let temp1 = temp + '.jpg';
    image.src = "";
    image.src = temp1;

  }

}