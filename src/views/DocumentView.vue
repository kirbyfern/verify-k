<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card color="#006aad" elevation="12" class="rounded-lg">
            <v-card-title class="white--text"> CSULB Keysights</v-card-title>
            <v-divider></v-divider>
            <v-data-table
              :headers="headers"
              :items="filteredDocuments"
              hide-default-footer
              disable-pagination
              hide-default-header
              :items-per-page="10"
              :height="350"
              class="table-bg"
            >
              <template v-slot:body="{ items }">
                <tbody>
                  <tr
                    v-for="item in items"
                    :key="item.filename"
                    class="table-row-bg"
                  >
                    <td class="text-start">
                      <a :href="item.url" target="_blank">{{ item.filename }}</a>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>

            <v-card-actions>
              <v-text-field
                v-model="search"
                label="Search"
                single-line
                hide-details
                clearable
                dark
                color="grey lighten-1"
              ></v-text-field>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  export default {
    data() {
      return {
        search: "",
        headers: [
          {
            text: "Filename",
            value: "filename",
            sortable: false,
          },
        ],
        documents: [
          {
            filename: "Buffer Overflow!",
            url: "https://github.com/kirbyfern/378",
          },
          {
            filename: "Buffer Overflow!",
            url: "https://github.com/kirbyfern/378",
          },
        ],
      };
    },
    computed: {
      filteredDocuments() {
        return this.documents.filter(
          (doc) =>
            !this.search ||
            (doc.filename &&
              doc.filename.toLowerCase().includes(this.search.toLowerCase()))
        );
      },
    },
  };
  </script>