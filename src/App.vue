<template>
<div class="navba">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            contacts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/addcontact" class="nav-link">AddContact</router-link>
            <router-link to="/contactget" class="nav-link">GetContact</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropbtn dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            company
          </a>

          <div
            class="dropdown-menu dropdown-content"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <router-link to="/addingcompanydata" class="nav-link">Add company</router-link>
           
            <router-link to="/getcompany" class="nav-link">getcompany</router-link>
          </div>
        </li>
      </ul>
    </div>
   
  </nav>
  </div>
   <router-view />
  <!-- <div id="nav">
    <router-link to="/addcompany"
      ><button type="button" class="btn btn-secondary">
        AddCompany
      </button></router-link
    >&nbsp;&nbsp;
    <router-link to="/getcompany"
      ><button type="button" class="btn btn-secondary">
        GetCompany
      </button></router-link
    >&nbsp;&nbsp;
    <router-link to="/addcontact"
      ><button type="button" class="btn btn-secondary">
        AddContact
      </button></router-link
    >&nbsp;&nbsp;
    <router-link to="/contactget"
      ><button type="button" class="btn btn-secondary">
        GetContact
      </button></router-link
    >&nbsp;&nbsp;
    <router-view />
  </div> -->
</template>

<script>
// import AddCompany from "./components/AddCompany.vue";
// import GetCompany from "./components/GetCompany.vue";
export default {
  name: "App",
  // components: {
  //   AddCompany,
  //   GetCompany,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dropdown-item {
  background-color: rgb(94, 23, 94);
  color: aliceblue;
}
.navba{
  padding-bottom: 12px;

}
.dropdown-menu{
    display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
</style>
