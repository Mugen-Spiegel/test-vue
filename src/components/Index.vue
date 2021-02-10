<template>
  <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
    <v-toolbar-title>Snippet Code</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
    
          <v-tab
            v-for="item in items"
            :key="item"
          >
          {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <div v-if="tab==0" class="content" >
             <list-snippet/>
          </div>
          <div v-if="tab==1" class="content" >
            <create-snippet/>
          </div>
          <div v-if="tab==2" class="content" >
             <edit-snippet/>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ListSnippet from '@/components/ListSnippet'
import EditSnippet from '@/components/EditSnippet'
import CreateSnippet from '@/components/CreateSnippet'
  export default {
    components: {
      ListSnippet,
      EditSnippet,
      CreateSnippet,
    },
    data () {
      return {
        tab: null,
        items: [
          'list',
          'create',
          'edit'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur \
        adipiscing elit, sed do eiusmod tempor incididunt ut \
        labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip \
        ex ea commodo consequat.',
      }
    },
  }
</script>