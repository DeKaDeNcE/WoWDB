const blizzard = require('./blizzard.js').initialize({
	key: '14e57655eaf342e78838f07903d69e12', //process.env.BLIZZARD_CLIENT_ID,
	secret: 'g9l4cj2Xcb94L0XFi8VMMT92Vg1jCf8z', //process.env.BLIZZARD_CLIENT_SECRET,
	origin: 'us',
	locale: 'en_US'
});

async function example () {
	try {
		await blizzard.getApplicationToken().then(response => {
			blizzard.defaults.token = response.data.access_token
		})
		const item = await blizzard.wow.item({ id: 168185 })

		console.log(item)
	} catch (err) {
		console.error(err)
	}
}

example()

/*const polka = require('polka')
const { json } = require('body-parser')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const { PORT=3000 } = process.env

const tasks = [
	{ id: 1, name: 'Go to Market', complete: false },
	{ id: 2, name: 'Walk the dog', complete: true },
	{ id: 3, name: 'Take a nap', complete: false }
]

const typeDefs = `
	type Task {
		id: Int!
		name: String!
		complete: Boolean!
	}
	type Query {
		tasks: [Task]
		task(id: Int!): Task
	}
`

const resolvers = {
	Query: {
		tasks: () => tasks,
		task: (_, args) => tasks.find(o => o.id === args.id)
	}
}

const schema = module.exports = makeExecutableSchema({ typeDefs, resolvers })

polka().use(json()).post('/graphql', graphqlExpress(req => ({
		schema
	}))).get('/graphiql', graphiqlExpress({
		endpointURL: '/graphql'
	})).listen(PORT, err => {
		if (err) throw err
		console.log(`> Ready on localhost:${PORT}`)
	})*/

console.log('%c  ╦ ╦╔═╗╦ ╦╔╦═╗╔╗   \n' +
			  '  ║║║║ ║║║║ ║ ║╠╩╗  \n' +
			  '  ╚╩╝╚═╝╚╩╝═╩═╝╚═╝  ', 'font-size: 20px; line-height: 1.12; color: #bada55; text-shadow: 2px 2px #f00, 2px 2px 25px #fff')