<template>
<div>
<p class="container-right">{{datalist1.length}} results</p>
   <table class="table table -dark">
        <thead  >
            <tr>
                <th class="col">select which form </th>
                 <th class="col">SelectAction</th>
                  <th class="col">First Name</th>
                   <th class="col">Last Name </th>
                    <th class="col">Email</th>
                     <th class="col">Phone1</th> 
                     <th class="col">ph1</th>
                      <th class="col">ph2</th>
                     <th class="col">Fax 1</th>
                     <th class="col">FaxNumber</th>
                            <th class="col">Tags</th>
                     
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(list,i) in userList1" :key="i">
                <td>{{list.selectwhichtypeofform}}</td>
                 <td>{{list.selectactionset}}</td>
                  <td>{{list.firstname}}</td>
                   <td>{{list.lastname}}</td>
                   <td>{{list.email}}</td>

                   <td>{{list.phone1}}</td>
                   <td>{{list.phone2}}</td>
<td>{{list.landline}}</td>
                   <td>{{list.faxtype}}</td>
                   <td>{{list.fax1}}</td>
                    <td>{{list.tag}}</td>

            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
userList1:{},
datalist1:[]
    }
  },
    mounted() {
    this.adddata();
  },

   methods:{
        adddata() {
      console.log(this.userList1);

      axios.get("https://task-4-43cf0-default-rtdb.firebaseio.com/contact.json")

        .then((response) => {
          this.userList1 = response.data;

          console.log(this.userList1);

          Object.keys(this.userList1).forEach((result) => {
            console.log(result);

            this.datalist1.push(this.userList1[result]);
          });
        });
    },
    },
}
</script>