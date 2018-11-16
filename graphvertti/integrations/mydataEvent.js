const MyDataEvent = `
mutation addEvent($event : MyDataInput!) {
    AddEvent(input:$event) {
      released,
      requestedBy,
      nationalID,
      organization
    }
  }
`

export {MyDataEvent}