<template>
  <div>
    <button
      type="button"
      class="btn"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Add Data
    </button>
    <!-- <p class="result">
      <b>{{ datalist.length }}</b
      >results
    </p>
    <div class="center:flex-items float-right">
      <span id="right">Per page:</span>
      <select v-model="currentEntries" id="right">
        <option v-for="some in someEntries" :key="some" :value="some">
          {{ some }}
        </option>
      </select>
    </div> -->
    <div class="inline" >
    
     <p class="float-left">
      <b>{{ datalist.length }}</b
      >results
    </p>
   </div>
       <div class="float-right">
     
      <select v-model="currentEntries" >
        <option v-for="some in someEntries" :key="some" :value="some">
          {{ some }}
        </option>
         
      </select>
      <span >Per page</span>
    </div>
   
  
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onFormSubmit">
              <label for="company">Company Name : </label><br />
              <input
                type="text"
                id="company"
                placeholder="Enter Your company name .."
                v-model="companylist.company"
              />
              <br /><br />
              <label for="company">Phone : </label><br />
              <input
                type="text"
                id="company"
                placeholder="Enter Your Phone .."
                v-model="companylist.phone"
              />
              <br /><br />
              <label for="company">Fax : </label><br />
              <input
                type="text"
                id="company"
                placeholder="Enter Your Fax .."
                v-model="companylist.fax"
              />
              <br /><br />
              <label for="email">Email : </label><br />
              <input
                type="email"
                id="email"
                placeholder="Enter Your email.."
                v-model="companylist.email"
              />
              <br /><br />
              <label for="email">City : </label><br />
              <input
                type="text"
                id="city"
                placeholder="Enter Your city.."
                v-model="companylist.city"
              />
              <br /><br />
              <label for="state">State : </label><br />
              <input
                type="text"
                id="state"
                placeholder="Enter Your state.."
                v-model="companylist.state"
              />
              <br /><br />

              <input
                type="submit"
                id="button"
                value="Submit"
                v-on:click="onFormSubmit"
                class="btn btn-info"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Fax</th>
          <th>Email</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user2, i) in datalist" :key="i">
          <td>{{ i + 1 }}</td>
          <td style="color: blueviolet">{{ user2.company }}</td>
          <td>{{ user2.phone }}</td>
          <td>{{ user2.fax }}</td>
          <td>{{ user2.email }}</td>
          <td>{{ user2.city }}</td>
          <td>{{ user2.state }}</td>
        </tr>
      </tbody>
    </table>
 
</template>

<script>
import axios from "axios";
export default {
  name: "GetCompany",
  data() {
    return {
      userdetails: [],
      datalist: [],
      companylist: "",
      someEntries: [5, 10, 15],
    };
  },
  mounted() {
    this.addcontact();
  },

  methods: {
    addcontact() {
      axios

        .get("https://task-4-43cf0-default-rtdb.firebaseio.com/company.json")

        .then((response) => {
          this.userdetails = response.data;
          console.log(this.userdetails);
          Object.keys(this.userdetails).forEach((result) => {
            this.datalist.push(this.userdetails[result]);
          });
        });
    },
    onFormSubmit(e) {
      e.preventDefault();
      console.log(this.companylist);
      const result = axios.post(
        "https://task-4-43cf0-default-rtdb.firebaseio.com/company.json",
        this.companylist
      );
      this.companylist = result.data;
    },
  },
};
</script>
<style>
.container {
  /* display: flex; */
  margin-left: 60px;
  font-size: 12px;

  margin-top: 20px;
}

.container th {
  padding-top: 2px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #8d8f8ea8;
  color: rgb(12, 10, 10);
  font-size: 10px;
}
.container-right {
  margin-right: 1000px;
}
.btn {
  margin-left: 1150px;
  background-color: skyblue;
  margin-bottom: 15px;
  margin-top: 2 px;
}
.result {
  margin-right: 1150px;
  padding-top: 15px;
  margin-bottom: 15px;
}
#email {
  width: 400px;
  border-radius: 8px;
}
.right{
    margin-left: 1150px;
  padding-top: 25px;
}

</style>