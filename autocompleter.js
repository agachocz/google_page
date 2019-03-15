Vue.component('v-autocompleter', {
    props: ["input"],
    computed : {
        results: function () {
            let results = [];

            for (let i = 0; i < this.input.length; i++) {
                results.push(this.input);
            }

            return results;
        }
    },
    template:
        `<div class="autocompleter">
          <p>Input: {{input}}</p>
          <ul class ="autocomplete-results">
             <li class="autocomplete-result"
                   v-for="(result, i) in results" :key="i">{{ result }}</li>
          </ul>
        </div>`
})

    new Vue({
        el: "#input_container",
        data: function () {
            return {
                inputContent: "test"
            }
        }
    })
