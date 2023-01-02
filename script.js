import {
    collection,
    addDoc,
    getFirestore,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyAptqmHqUXjv8zPF8i5E1lx46tPbfRNA3s",
    authDomain: "haprocess-29ade.firebaseapp.com",
    projectId: "haprocess-29ade",
    storageBucket: "haprocess-29ade.appspot.com",
    messagingSenderId: "539952006165",
    appId: "1:539952006165:web:82e5370a9cbbcb2b14ba1c",
    measurementId: "G-FGSHJBDEKG"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// //Get Form Values
// const prefix = document.getElementById('prefixes').value
// const firstName = document.getElementById('givenName').value
// const lastName = document.getElementById('surName').value
// const title = document.getElementById('title').value
// const organization = document.getElementById('organization').value
// const website = document.getElementById('website').value
// const email = document.getElementById('email').value
// const phone = document.getElementById('areaCode').value + '-' + document.getElementById('lead3') + '-' + document.getElementById('last4')
// const interests = `${document.getElementById('selectAll').value}\n${document.getElementById('bolPantry').value}\n${document.getElementById('FeedMySheep').value}\n${document.getElementById('GiftedShop').value}\n${document.getElementById('GoodNews').value}\n${document.getElementById('KingdomsFlock').value}\n${document.getElementById('OutdooBazaar').value}`

const description = document.getElementById('description')

const submitButton = document.getElementById('sub-btn')

submitButton.addEventListener("click",async (e) => {
    try {
    const docRef = await addDoc(collection(db, "partnerRequests"), {
        prefix: "name",
        FirstName: "vaibhav"
        // LastName: lastName,
        // Title: title,
        // Organization: organization,
        // Website: website,
        // Email: email,
        // PhoneNumber: phone,
        // Interests: interests,
        // TellUsWhy: description

    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
})