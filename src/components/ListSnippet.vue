<template>
  <v-data-table
    :headers="headers"
    :items="$store.getters.snippet_list"
  >
   </v-data-table>
 
</template>

<script>
import axios from "axios";

  export default {
    data () {
      return {
        headers: [
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Language', value: 'language' },
          { text: 'Active', value: 'active' },
          { text: 'Code Block', value: 'code_block' },
        ],
      }
    },
    mounted() {
      axios
          .get('http://127.0.0.1:8000/api/snippet',
          {
              headers: {
            "Content-Type": "application/json",
          }
          })
          .then(response => (this.$store.commit('change', response.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
  },
  }
</script>
