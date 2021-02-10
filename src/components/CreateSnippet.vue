<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="14"
          sm="6"
          md="3"
        >
          <v-text-field
            v-model="title"
            label="Title"

          ></v-text-field>
        </v-col>

        <v-col
          cols="14"
          sm="6"
          md="3"
        >
          <v-text-field
            v-model="description"
            label="Description"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
           v-model="lang"
            label="Language"
          ></v-text-field>
        </v-col>
       

       <v-col
        cols="12"
        sm="6"
        md="3"
        >
       <v-checkbox
       class="text-wrap"
        v-model="checkbox"
        :label="`Active: ${checkbox.toString()}`"
        ></v-checkbox>
        </v-col>

       <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-textarea
            counter
            label="Code block"
            v-model="code_block"
        ></v-textarea>
        </v-col>
        
        
      </v-row>
    <v-btn
    block
    elevation="2"
    large
    x-large
    @click="formSubmit"
    >
    Submit
    </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";


  export default {
    data () {
      return {
        checkbox: true,
        code_block: '',
        lang: '',
        description: '',
        title: '',
      }
    },
    methods: {
      formSubmit(e) {
          axios
          .post('http://127.0.0.1:8000/api/create-snippet', {
                "title": this.title,
                "description": this.description,
                "language": this.lang,
                "active": this.checkbox,
                "code_block": this.code_block
          },
          {
              headers: {
            "Content-Type": "application/json",
          }
          })
          .then(response => (console.log(response.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
      }
  }
  }
</script>