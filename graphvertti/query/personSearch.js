import xml2js from 'xml2js'
import util from 'util'
import fs from 'fs'
import path from 'path'
import { request } from 'graphql-request'
import {MyDataEvent} from '../integrations/mydataEvent'

export default class PersonSearch {

    async getPersonByNationalId(args) { 
        let hetu = args.Henkilotunnus
        let loppukayttaja = args.Loppukayttaja
        let released = new Date().toLocaleString()
        let organization = args.SoSoNimi
        let data = fs.readFileSync(path.join( __dirname ,`../mocks/${hetu}.xml`))
        if(!data) {
            return null
        }
        await request('http://localhost:3002/graphql', MyDataEvent,{
            event: {
                released: released,
                organization: organization,
                nationalID: hetu,
                requestedBy: loppukayttaja
            }
        })

        const parser = new xml2js.Parser({explicitArray: false});
        const json = await util.promisify(parser.parseString.bind(parser))(data);
        return json.VTJHenkiloVastaussanoma
    }
}