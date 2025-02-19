import React from 'react'
import Card from '../../components/UI/Card'

const Atmcard = () => {

    const atmCardData =[
       {
        id: "1",
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        valid: "12/22",
        cardNumber: "3778 **** **** 1234"
    }  ,
    {
        id: "2",
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        valid: "12/22",
        cardNumber: "3778 **** **** 1234"
    }  ,
    ]
   const cardColor = (data)=>{
    const bg: ''
    const text= ""
    const icon= ""
    const lineColor= ""
    switch (data.id) {
        case data.id === "1":
            bg: "blue"
            
            break;
    
        default: <div></div>
            break;
    }
   }
//    const AnalyticsCard = ({ data = {} }: { data: Partial<analyticsData> }) => {
//     let bgColor = ''
//     let chevronColor = ''
//     // Determine background color and chevron color based on data key
//     switch (data.key) {
//         case 'volumetoday':
//             bgColor = 'bg-teal-300 bg-opacity-10 rounded-2xl'
//             chevronColor = 'teal'
//             break
//         case 'hubsalesweek':
//             bgColor = 'bg-indigo-800 bg-opacity-10 rounded-2xl'
//             chevronColor = 'indigo'
//             break
//         case 'hubscount':
//             bgColor = 'bg-yellow-400 bg-opacity-10 rounded-2xl'
//             chevronColor = 'yellow'
//             break
//         case 'customers':
//             bgColor = 'bg-red-600 bg-opacity-10 rounded-2xl'
//             chevronColor = 'red'
//             break
//         case 'hubsalestoday':
//             bgColor = 'bg-teal-300 bg-opacity-10 rounded-2xl'
//             chevronColor = 'teal'
//             break
//         case 'volumethismonth':
//             bgColor = 'bg-indigo-800 bg-opacity-10 rounded-2xl'
//             chevronColor = 'indigo'
//             break
//         case 'customersb2b':
//             bgColor = 'bg-red-600 bg-opacity-10 rounded-2xl'
//             chevronColor = 'red'
//             break
//         case 'customersb2c':
//             bgColor = 'bg-yellow-400 bg-opacity-10 rounded-2xl'
//             chevronColor = 'yellow'
//             break
//         default:
//             bgColor = ''
//     }

  return (
    <div className='flex flex-1'>
        {atmCardData.map((item)=>(
      <Card key={item.id} >
        <div>  <p>Balance</p>  <p> {item.balance} </p>  <img src="" alt="chip" /> </div>
        <div>  <p>CARD HOLDER</p>  <p> {item.cardHolder} </p>  </div>
        <div>  <p>VALID THRU</p>  <p> {item.valid} </p>  </div>
        <div>    <p> {item.cardNumber} </p>  <img src="" alt="logo" /> </div>
      </Card>
       ))
      }
    </div>
  )
}

export default Atmcard
