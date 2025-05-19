import { belongsTo, createServer, hasMany, Model, JSONAPISerializer } from 'miragejs'
import { signInUserData } from './data/authData'
import authFakeApi from './fakeApi/authFakeApi'
// import transactionFakeApi from './fakeApi/transactionFakeApi'


export function makeServer() {
    return createServer({

        models: {
            // user: Model.extend({
            //     team: belongsTo('team'),
            //     role: 'user'  // Role can be 'user', 'teamLeader', or 'teamCaptain'
            // }),
            // team: Model.extend({
            //     users: hasMany('user'), // Team has many users; users have roles to specify leaders or captains
            //     // teamLeader: belongsTo('user'),
            //     // teamCaptain: belongsTo('user')
            // })
            user: Model.extend({
                transactions: hasMany()
              }),
              transaction: Model
        },

        serializers: {
            application: JSONAPISerializer,
        },

        seeds(server) {
            signInUserData(server);
        },

        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                const external = request.url.startsWith('http')
                return external
            })
            // this.passthrough()
            this.passthrough("https://ca44bd156ff47d74bc2f.free.beeceptor.com/api/");


            authFakeApi(this)
            // transactionFakeApi(this)
        },
    })
}