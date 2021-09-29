import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {database} from "@/firebase";
import {collection, getDocs, setDoc, addDoc, doc} from "firebase/firestore";
import {uid} from 'uid';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: false,
        userRecipes: JSON.parse(localStorage.getItem("recipes")) || [],
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
            localStorage.setItem('recipes', JSON.stringify(payload));
        }
    },
    actions: {
        async getRecipes({state, commit}, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: '378bc342',
                        app_key: 'c1a0ca2a4d46479363e07e18045cfabe',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        },

        userJoin({commit}, {email, password}) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    commit('setUser', user)
                    commit('setIsAuthenticated', true)
                    router.push('/about')
                })
                .catch(() => {
                    commit('setUser', null)
                    commit('setIsAuthenticated', false)
                    router.push('/')
                })
        },

        userLogin({commit}, {email, password}) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    commit('setUser', user)
                    commit('setIsAuthenticated', true)
                    router.push('/about')
                })
                .catch(() => {
                    commit('setUser', null)
                    commit('setIsAuthenticated', false)
                    router.push('/')
                })
        },

        userSignOut({commit}) {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    // remove user and recipes
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    localStorage.removeItem("user");
                    localStorage.removeItem("recipes");

                    // navigate home
                    router.push('/')
                })
                .catch(() => {
                    commit("setUser", null)
                    commit("setIsAuthenticated", false)
                    router.push("/")
                })
        },

        async addRecipe({state, commit}, payload) {
            const [uid, id] = [uid, state.user.user.uid]
            const data = {
                label: payload.recipe.label,
                id: id,
            }
            await addDoc(collection(database, "recipes"), data)
                .catch(e => console.log("Error adding document: ", e));
        },

        async getUserRecipes({state, commit}) {
            const querySnapshot = await getDocs(collection(database, "recipes"));
            const recipes = [];
            querySnapshot.forEach(doc => {
                recipes.push(doc.data());
            })

            commit('setUserRecipes', recipes);
        }

    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    },
    modules: {}
})
