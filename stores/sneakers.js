// export const useSneakers = defineStore("sneaker", {
//   state: () => {
//     return {
//       sneakers: [],
//     };
//   },
//   getters: {
//     getSneakers: (state) => state.sneakers,
//   },
//   actions: {
//     async fetchSneakers(i) {
//       this.sneakers = await axios({
//         url: "http://54.37.12.181:1337/api/sneakers/?pagination[page]=" + i,
//         method: "get",
//       });
//     },
//   },
// });
