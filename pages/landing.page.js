'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields:{
        searchfield:{Xpath:'//*[@id="lst-ib"]'},
        enterNumbers:'[id= "cwos"]',
        search:{css:'#lst-ib'},
        one:'[id = "cwbt33"]',
        two:'[id = "cwbt34"]',
        three:'[id = "cwbt35"]',
        four: '[id = "cwbt23"]',
        five:'[id = "cwbt24"]',
        six:'[id = "cwbt25"]',
        seven:'[id= "cwbt13"]',
        eight:'[id = "cwbt14"]',
        nine:'[id = "cwbt15"]',
        zero:'[id = "cwbt43"]',
        add:'[id = "cwbt46"]',
        subtract:'[id = "cwbt36"]',
        divide:'[id = "cwbt16"]',
        multiply:'[id = "cwbt26"]',
        decimal:'[id = "cwbt44"]',
        equals:{Xpath:'//*[@id="cwbt45"]/div/span'},
        answer: {Xpath:'//*[@id="cwos"]'},
        clear:'[id = "cwclrbtnAC"]',
        clearEntry:'[id = "cwclrbtnCE]'


    },

    verifyPageLoaded() {
        I.wait(2);
        I.see("Images");
    },

    searchforcalculator(){
        I.wait(2);
        I.fillField(this.fields.searchfield,"calculator");
        I.pressKey('Enter');
    },

    subtwonumbers(){
        I.click(this.fields.enterNumbers);
        I.wait(1);
        I.click(this.fields.three);
        I.click(this.fields.five);
        I.click(this.fields.subtract);
        I.click(this.fields.one)
        I.click(this.fields.equals);
        I.wait(5);
        I.see(this.sub());

    },

    addthreenumbers(){
        I.click(this.fields.enterNumbers);
        I.wait(1);
        I.click(this.fields.four);
        I.click(this.fields.zero);
        I.click(this.fields.add);
        I.click(this.fields.six);
        I.click(this.fields.add);
        I.click(this.fields.two);
        I.click(this.fields.equals);
        I.wait(5);
        I.see(this.sum());

    },

    multfournumber(){
        I.click(this.fields.enterNumbers);
        I.wait(1);
        I.click(this.fields.seven);
        I.click(this.fields.decimal)
        I.click(this.fields.six);
        I.click(this.fields.multiply);
        I.click(this.fields.eight);
        I.click(this.fields.multiply);
        I.click(this.fields.three);
        I.click(this.fields.multiply);
        I.click(this.fields.nine);
        I.click(this.fields.equals);
        I.wait(5);
        I.see(this.mult());

    },
    dividenumbers(){
        I.click(this.fields.enterNumbers);
        I.click(this.fields.one);
        I.click(this.fields.eight);
        I.click(this.fields.divide);
        I.click(this.fields.five);
        I.click(this.fields.equals);
        I.see(this.div());

    },

    clearall(){
        I.click(this.fields.enterNumbers);
        I.click(this.fields.eight);
        I.click(this.fields.multiply);
        I.click(this.fields.nine);
        I.click(this.fields.equals);
        I.click(this.fields.clear);
        I.see("0");
    },

    clearentry(){
        I.click(this.fields.enterNumbers);
        I.click(this.fields.eight);
        I.click(this.fields.clearEntry);
        I.see("0");
    },



    sub(){

      var sub = 35 - 1;

        return sub.toString();

    },

    sum(){

        var sum = 40 + 6 + 2;

        return sum.toString();

    },

    mult(){
        var mult = 7.6 * 8 * 3 * 9;

        return mult.toString();
    },

    div(){
        var div= 18 / 5;

        return div.toString();
    }
}