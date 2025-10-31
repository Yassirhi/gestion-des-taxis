const prompt = require ("prompt-sync")();

taxis = [ 
{ id: 1, position: 5 , available: true, timeRemaining: 0, totalRides:0}, 
{ id: 2, position: 12, available: true, timeRemaining: 0, totalRides:0}, 
{ id: 3, position: 20, available: true, timeRemaining: 0, totalRides:0} 
] 
let waitingQueue=[];

function ocuppied(availableTaxis,taxi_proche,requests) {
            availableTaxis[taxi_proche].timeRemaining=requests[0].duration;
            availableTaxis[taxi_proche].available=false;
            availableTaxis[taxi_proche].position=requests[0].position
            availableTaxis[taxi_proche].totalRides++
    //        console.log(availableTaxis[taxi_proche].position)
}

function main(){
    let idreq=+prompt("l'ID request : ") 
    let pos=+prompt("Position  : ") 
    let dur=+prompt("Duration : ")
    let tim=+prompt("Time : ")
    let requests=[]
            

    const request ={reqId:idreq,position:pos,duration:dur,time:tim}
    requests.push(request)
    let requestedPosition= requests[0].position
    let availableTaxis = taxis.filter(t => t.available);
    if(availableTaxis.length>0){ 
        let taxiPositions = availableTaxis.map(t=>t.position)
        let distances = taxiPositions.map(pos => Math.abs(pos - requestedPosition))
        let minDist= Math.min(...distances)
        let taxi_proche= distances.indexOf(minDist);

        console.log("==== the nearest taxi is :")
        console.log(availableTaxis[taxi_proche]);
        let d=prompt("Do you want to take this cap? (y/n): ")
        if(d=="y"){
            ocuppied(availableTaxis,taxi_proche,requests)
        }
    }else {
        console.log("No Available taxis ")

        waitingQueue.push(requests[0])

    //  console.log(waitingQueue)
        
    }
   

}
    


main()