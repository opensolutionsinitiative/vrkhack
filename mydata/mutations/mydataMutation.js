
import MyData from '../db/mydata/mydataModel'

class MyDataMutation {
    async createEvent(args) {
        let input = args.input
        return MyData.create(input)
    }
}

export default MyDataMutation