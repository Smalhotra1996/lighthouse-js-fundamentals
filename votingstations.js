function chooseStations(stations){

    let goodStations = [];

    for(const building of stations){
        const name = building[0];
        const capacity = building[1];
        const venueType = building[2];
        
        if (capacity>=20 && (venueType === "school" || venueType === "community centre")){
            goodStations.push(name);
        }
    }

    return goodStations;
}

const input = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];

console.log(chooseStations(input));