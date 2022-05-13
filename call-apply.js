const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',

};
const heroKalam = {
    id: 103,
    money: 8000,
    name: 'Hero Kalam',

};

/* kibria.treatDey.call(heroBalam, 500);
kibria.treatDey.call(heroBalam, 300);
kibria.treatDey.call(heroKalam, 1000); */

kibria.treatDey.apply(heroBalam, [500]);
kibria.treatDey.apply(heroKalam, [1000]);

kibria.treatDey.apply(kibria, [100]);