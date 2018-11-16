import MyData from '../db/mydata/mydataModel'

class MyDataQuery {
   async getMyData(args) {
        let nationalID = args.Henkilotunnus
        return MyData.find({nationalID})
   }
}

export default MyDataQuery



