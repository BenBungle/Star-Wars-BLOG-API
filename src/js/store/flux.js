const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: {},
			planets: {},
			starships: {},
			films: {},
			favorites: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction


			loadSomeData: () => {

				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						setStore({ character: data })
					})
					.catch(error => console.log(error))

				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						setStore({ planets: data })
					})
					.catch(error => console.log(error))

				fetch("https://swapi.dev/api/starships/")
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						setStore({ starships: data })
					})
					.catch(error => console.log(error))

				fetch("https://swapi.dev/api/films/")
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						setStore({ films: data })

					})
					.catch(error => console.log(error))
			},

			addFavorite: (name) => {
				const store = getStore();
				let count = 0;
				store.favorites.map((elem) => {
					if (elem.name == name) {
						count = 1
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name
							}
						]
					})
				}
			},

			deleteFavorite: (id) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i != id);
				setStore({ favorites: newFavorites });
			}

		}
	};
};


export default getState;
