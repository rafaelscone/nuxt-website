
<script lang="ts">
import db from "./init.js"
import { collection,addDoc,doc,setDoc, getDoc, getDocs, query,where, onSnapshot } from "firebase/firestore"

export default {
    data(){
        return {
            countries: [],
            messages: [],
            user:"joao",
        }
    },
    methods: {
        async createUser(){
            const colRef = collection(db, "users")
            
            const dataOjb = {
                name: "John Doe",
                email: "email@email.com",
                age: 25
            }
            // setDoc(docRef, dataOjb)
            // doc(firestore, 'cities', 'DC')
            const docRef = await addDoc(colRef, dataOjb)
            console.log("Document written with ID: ", docRef.id)
        },
        async createCountry(){
            await setDoc(doc(db, "countries", "GB"), {
                name: "United Kingdom",
                capital: "London",
                population: 67000000
            }, { merge: true })
        },
        async readData(){
            const docSnap = await getDoc(doc(db, "countries", "USA"))
            if (docSnap.exists()){
                console.log("Document data: ", docSnap.data())
            } else {
                console.log("No such document!")
            }
        },
        async getCountry(){
            const docSnap = await getDocs(query(collection(db, "countries")))

            docSnap.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data())
                //this.countries.push(doc.data())
                this.countries.push(doc.data())
            })

            // where (key, operator, value)
            // const q = query(collection(db, "countries"), where("capital", "==", "London"))
            // const querySnapshot = await getDocs(q)
            // querySnapshot.forEach((doc) => {
            //     console.log(doc.id, " => ", doc.data())
            // })
        },
        async getUsers(){
            const q = query(collection(db, "users"), where("age", ">", 22))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
            })
        },
        async getMessages(){
            const q = query(collection(db, "message"), where("user", "==", "joao"))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                this.messages.push(doc.data())
            })
        },
        async getMessagesUser(){
            this.messages = []
            //const q = query(collection(db, "message"), where("user", "==", this.user))
            //const querySnapshot = await getDocs(q)
            //querySnapshot.forEach((doc) => {
            //    console.log(doc.id, " => ", doc.data())
            //    this.messages.push(doc.data())
            //})
            
            //onSnapshot(collection(db, "message"), (snap) => {
            //    snap.forEach((doc) => {
            //        //console.log(doc.id, " => ", doc.data())
            //        this.messages.push(doc.data())
            //    })
            //})

            onSnapshot(
                query(collection(db, "message"), where("user", "==", this.user)),
                (snap) => {
                    snap.docChanges().forEach((change) => {
                        this.messages.push(change.doc.data())
                        //if (change.type === "added") {
                        //    console.log("New: ", change.doc.data())
                        //    this.messages.push(change.doc.data())
                        //}
                        //if (change.type === "modified") {
                        //    console.log("Modified: ", change.doc.data())
                        //}
                        //if (change.type === "removed") {
                        //    console.log("Removed: ", change.doc.data())
                        //}
                    })
                }
            )
        }

    },
    created(){
        //this.createUser()
        //this.createCountry()
        //this.readData()
        //this.getCountry()
        //this.getUsers()
        //this.getMessages()
        this.getMessagesUser()
    }
}

</script>

<template>
    User: <input @keyup.enter="getMessagesUser" type="text" v-model="user" placeholder="Message" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out">
    <button @click="getMessagesUser" class="px-4 py-2 bg-blue-500 text-white rounded-md">Get Messages</button>
   <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault pageTitle="Notificação" />
    <!-- Breadcrumb End -->

    <!-- Notifications Start -->
    <div class="flex flex-col gap-7.5" v-for="message in messages" :key="message.id">
      <DefaultCard title="Notifications Style 1">
        <notification :message="message.message" :option1="message.option1" :option2="message.option2"/>
      </DefaultCard>
    </div>
    <!-- Notifications End -->
    <p v-for="country in countries" :key="country.id">{{ country.name }}</p>

  </DefaultLayout> 

</template>