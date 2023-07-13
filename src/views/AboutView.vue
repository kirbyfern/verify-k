<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="grey lighten-5 my-5" width="600" elevation="5" shaped>
          <v-card-title class="pa-4 text-h4 font-weight-bold"
            >About me?</v-card-title
          >
          <v-card-text class="px-4" style="line-height: 1.6">
            I am an aspiring <strong style="color: #006aad">software engineer</strong> with a solid technology background and leadership experience.
            <br /><br />

            My professional journey began after immigrating to the United States from the Philippines. I served in the <strong style="color: #006aad">United States Navy</strong> as an Airman (E-3) and utilized this opportunity to enhance my technical skills. I started by learning Ruby as my first programming language and actively engaged with coding meetups, attended the SCALE convention, and participated in a Coding Bootcamp through the TechHire and Youth Policy Institute scholarship program.
            <br /><br />

            Following my time in the Navy, I made the decision to further my education and was accepted into <strong style="color:#006aad">California State University, Long Beach</strong> where I pursued a degree in computer science and engineering. My studies focused on software algorithms, software architecture, computer security principles, software development methodologies, and communication protocols.
            <br /><br />

            As someone who is committed to continuous learning, I am eager to join a company where I can grow and continuously develop my skills on a daily basis.

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-3 justify-center">
            <v-btn text color="primary" :href="gitHubLink" target="_blank"
              >My Projects</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <!-- <video-background
          :src="require(`@/assets/aboutVideo.mp4`)"
          style="
            max-height: 650px;
            height: 700vh;
            width: 490vh;
            max-width: 500px;
          "
        >
        </video-background> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import details from "@/assets/details.js";

export default {
  name: "AboutView",
  computed: {
    gitHubLink() {
      return details.gitHubLink;
    },
  },
};
</script>