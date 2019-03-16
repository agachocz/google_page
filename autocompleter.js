window.animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda"]

Vue.component('v-autocompleter', {
    props: ["input"],
    computed : {
        results: function () {
            let pattern = new RegExp(this.input.trim().toLowerCase());
            let results = window.animals.filter( function (word) {
                 return pattern.test(word.trim().toLowerCase());    
            });

            return results;
        }
    },
    template:
        `<div class="autocompleter">
          <table class ="autocomplete-results">
             <tr class="autocomplete-result"
                   v-for="(result, i) in results" :key="i">{{ result }}</tr>
          </table>
        </div>`
})

    new Vue({
        el: ".main",
        data: function () {
            return {
                inputContent: "",
                showAutocompleter: this.inputContent ? true : false
            }
        }
    })
