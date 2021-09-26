import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {database} from "@/firebase";
import {collection, getDocs, addDoc} from "firebase/firestore";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',
        user: null,
        isAuthenticated: false,
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload
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
                    commit('setUser', null)
                    commit('setIsAuthenticated', false)
                    router.push('/')
                })
                .catch(() => {
                    commit("setUser", null)
                    commit("setIsAuthenticated", false)
                    router.push("/")
                })
        },

        async addRecipe({state}, payload) {
            const recipe = payload.recipe
            try {
                await addDoc(collection(database, "recipes"), {
                    ...recipe,
                });
            } catch (e) {
                console.log('error adding document', e);
            }
        }

    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    },
    modules: {}
})
