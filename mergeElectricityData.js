/*
Problem: Merging Monthly Electricity Consumption Data

You have been provided with two linked lists that contain monthly electricity consumption data for various cities. Your task is to merge the two lists and provide a combined electricity consumption for each city.

Input:
Each item in the linked list has the following structure:
{
  "city": "City Name",
  "kWh": numeric_value
}

Where kWh represents the kilowatt-hour, which is a unit of energy equivalent to one kilowatt of power sustained for one hour.

Given a linked list with the entries:
{
  "city": "Vancouver",
  "kWh": 2100
},
{
  "city": "Montreal",
  "kWh": 3500
}
[12:02 AM]
And another linked list with:
[12:02 AM]
{
  "city": "Vancouver",
  "kWh": 900
},
{
  "city": "Calgary",
  "kWh": 1800
}


Output:

Your function, named mergeElectricityData(firstList, secondList), should return:
[
  {
    city: "Vancouver",
    kWh: 3000
  },
  {
    city: "Montreal",
    kWh: 3500
  },
  {
    city: "Calgary",
    kWh: 1800
  }
]

Note:
If a city is present in both linked lists, you should add up their kWh values for the combined consumption. The cities present in only one list should still be included in the output with their original kWh values.
*/


const linkedList = require("./linkedList");

function mergreElectricityData(fll,sll) {
    //create map for combined data
    const combined = new Map();
    //create array to iterate through the lists
    const linkedLists = [fll,sll];
    //for each list
    for (let list of linkedLists) {
        // assign starting node
        let node = list.head
        
        // while  current node not null
        while (node){
            const mapCheck = combined.get(node.value.city)
            
            //if node in map
            if (mapCheck) {
                
                combined.set(node.value.city,node.value.kWh + mapCheck )
                // add kwh
            }      
            // if not in map
            if (!mapCheck) {
                // place values
                combined.set(node.value.city,node.value.kWh)

            }
            node = node.next;    
            //assign next node
        }
    }
    
    //convert to array of objects
    const result = [...combined].map(city=>{return {"city":city[0],"kwh":city[1]}})
    return result;
}


const listOne = [
    {
    "city": "Vancouver",
    "kWh": 2100
    },
    {
    "city": "Montreal",
    "kWh": 3500
    }
    ];
const listTwo = [
      {
        "city": "Vancouver",
        "kWh": 900
      },
      {
        "city": "Calgary",
        "kWh": 1800
      }
    ];


const fll = new linkedList();
for (let city of listOne) {
    fll.insert(city, ((node)=>node.next === null) )
}

const sll = new linkedList();
for (let city of listTwo) {
    sll.insert(city, ((node)=>node.next === null))
}



result = mergreElectricityData(fll,sll);
console.log(result)

module.exports = mergreElectricityData