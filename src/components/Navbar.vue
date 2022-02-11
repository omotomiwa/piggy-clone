<template>
  <div>
    <nav>
      <v-app-bar class="ma-0 pa-0" app color="white">
        <router-link to="/" style="text-decoration: none">
          <div class="d-flex mx-15 align-center">
            <v-img
              max-height="80"
              max-width="140"
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
            ></v-img>
          </div>
          <v-spacer></v-spacer>
        </router-link>

        <div class="container">
          <ul class="menu">
            <router-link
              to="/Save"
              style="text-decoration: none"
              class="nav-item"
            >
              <li class="nav-item hidden-sm-and-down">Save</li>
            </router-link>
            <router-link
              to="/Invest"
              style="text-decoration: none"
              class="nav-item"
            >
              <li class="nav-item hidden-sm-and-down">Invest</li>
            </router-link>
            <router-link
              to="/Stories"
              style="text-decoration: none"
              class="nav-item"
            >
              <li class="nav-item hidden-sm-and-down">Stories</li>
            </router-link>
            <router-link
              to="/Faq"
              style="text-decoration: none"
              class="nav-item"
            >
              <li class="nav-item hidden-sm-and-down">FAQs</li>
            </router-link>
            <router-link
              to="/Blog"
              style="text-decoration: none"
              class="nav-item"
            >
              <li class="nav-item hidden-sm-and-down">Blogs</li>
            </router-link>
            <router-link to="#" style="text-decoration: none" class="nav-item">
              <li class="nav-item hidden-sm-and-down">.</li>
            </router-link>
          </ul>
        </div>

        <v-spacer></v-spacer>
        <router-link
          to="/Login"
          style="color: grey; text-decoration: none"
          class="mx-2 hidden-sm-and-down"
        >
          <v-btn depressed outlined color="black" class="btn"> Sign in </v-btn>
        </router-link>
        <router-link
          to="/Signup"
          style="color: grey; text-decoration: none"
          class="mx-2 hidden-sm-and-down"
        >
          <v-btn depressed color="black" large class="white--text btn">
            Create free account
          </v-btn>
        </router-link>
        <v-app-bar-nav-icon
          right
          medium
          @click="drawer = !drawer"
          class="hidden-md-and-up mx-0"
        ></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="drawer" app class="white lighten--4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title white--text"> </v-list-item-title>
              <v-list-item-subtitle class="white--text"> </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
              link
              style="text-decoration: none"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  style="color: white; text-decoration: none"
                  >{{ link.text }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-app-bar>
    </nav>
  </div>
</template>
<style scoped>
nav .menu .nav-item:not(:last-child) {
  padding-right: 45px;
  text-decoration: none;
  color: black;
}
ul li {
  display: inline-block;
  text-decoration: none;
}
.btn {
  border-radius: 5px;
}

/* .nav-items {
  position: relative;
  left: 14%;
  justify-content: space-around;
  padding: 0;
  font-size: 17px;
  font-weight: 500;
} */
.logo-text {
  font-size: 33px;
}
.logo-number {
  font-size: 33px;
  color: black;
}
</style>
<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    links: [
      { text: "About", route: "/" },
      { text: "Our Story", route: "/" },
      { text: "Blog", route: "/" },
      { text: "Contact", route: "/" },
    ],
  }),
};
</script>
