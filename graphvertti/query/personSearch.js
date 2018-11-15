import xml2js from 'xml2js'
import util from 'util'
import fs from 'fs'
import path from 'path'

export default class PersonSearch {

    async getPersonByNationalId(args) { 
        let hetu = args.Henkilotunnus
        let data = fs.readFileSync(path.join( __dirname ,`../mocks/${hetu}.xml`))
        if(!data) {
            return null
        }
        const parser = new xml2js.Parser({explicitArray: false});
        const json = await util.promisify(parser.parseString.bind(parser))(data);
        return json.VTJHenkiloVastaussanoma
    }


}