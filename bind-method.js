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

kibria.treatDey(200);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(500);

const heroKalamTreatDey = kibria.treatDey.bind(heroKalam);
heroKalamTreatDey(1000);