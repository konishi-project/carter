<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
        <img src="@/assets/Brand/BrandWhite.png" alt="Konishi Logo" width="110">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a> 
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
            <div v-if="testUser.loggedIn === true" class="navbar-item has-dropdown is-hoverable">
                <a href="#!" class="navbar-link">
                    <img src="@/assets/Logos/gentoo.png" class="mr2" alt="">
                    {{ testUser.username }}
                </a>
                <div class="navbar-dropdown">
                    <a href="#!" class="navbar-item">
                        Profile
                    </a>
                    <a href="#!" class="navbar-item" @click="logOut">
                        Logout
                    </a>

                </div>
            </div>

            <div v-else class="navbar-item">
                    <a href="#!" class="button" @click="logIn">Log In</a>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

export default {
  name: 'Navbar',
  data() {
    return {
      testUser: {
        username: 'X1Zeth2X',
        profilepic: 'gentoo.png',
        loggedIn: false,
      },
    };
  },
  methods: {
    logIn() {
      this.testUser.loggedIn = true;
    },
    logOut() {
      this.testUser.loggedIn = false;
    },
  },
};
</script>

