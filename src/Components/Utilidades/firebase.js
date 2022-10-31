// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "relaxspa-react.firebaseapp.com",
  projectId: "relaxspa-react",
  storageBucket: "relaxspa-react.appspot.com",
  messagingSenderId: "192038132700",
  appId: "1:192038132700:web:9b89a676b0a41f9d788d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('../Servicios.json')
    const servicios = await promise.json()
    servicios.forEach( async(servicio) => {
       await addDoc(collection(db,"servicios"), {
            nombre: servicio.nombre,
            categoria: servicio.categoria,
            idCategoria: servicio.idCategoria,
            descripcion: servicio.descripcion,
            precio: servicio.precio,
            img: servicio.img
       })
    })
}

const getServicio = async (id) => {
  const servicio = await getDoc(doc(db, "servicios", id))
  const serv = [servicio.id, servicio.data()]
  console.log(serv)
  return serv
}

const getServicios = async () => {
  const servicios = await getDocs(collection(db, "servicios"))
  const items = servicios.docs.map(servicio => [servicio.id, servicio.data()])
  return items
}

export {cargarBaseDeDatos, getServicios, getServicio}