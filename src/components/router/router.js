import { createRouter, createWebHistory } from 'vue-router';
// import AddCompany from '@/components/AddCompany'

import GetCompany from '@/components/GetCompany'
import AddContact from '@/components/AddContact'
import ContactGet from '@/components/ContactGet'
import AddingcompanyData from '@/components/AddingcompanyData'
const routes = [
// {
//     path: '/addcompany',
//     name: 'AddCompany',
//     component: AddCompany
// },
{
    path: '/getcompany',
    name: 'GetCompany',
    component: GetCompany
},

{
    path: '/addcontact',
    name: 'AddContact',
    component: AddContact
},

{
    path: '/contactget',
    name: 'Contactget',
    component: ContactGet
},
{
    path: '/addingcompanydata',
    name: 'AddingcompanyData',
    component: AddingcompanyData
}]
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router