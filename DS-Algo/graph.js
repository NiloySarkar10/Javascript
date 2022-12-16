// Graph DS implemented for Airports

const airports = 'CCU BLR DEL BOM GOA HYD CHN AHM TRV BBSR BGDR SIL HRN IND LCK PUN'.split(' ');

const routes = [
    ['AHM', 'TRV'], ['GOA', 'IND'], ['CCU', 'BLR'], ['BOM', 'GOA'], ['BBSR', 'PUN'], ['HYD', 'DEL'], ['SIL', 'CCU'],
    ['HRN', 'IND'], ['LCK', 'PUN'], ['BLR', 'TRV'], ['CHN', 'BLR'], ['BGDR', 'AHM'], ['SIL', 'BGDR'], ['HYD', 'BLR'],
    ['CCU', 'HYD'], ['SIL', 'TRV'], ['CHN', 'BOM']
];


//#region Graph implementation

// Using an adjacency list to depict the graph
const adjacencyList = new Map();

// Add node
const addNode = (airport) => {
    adjacencyList.set(airport, [])
};

// Add Edge
const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

// Creating the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));
// console.log(adjacencyList);

//#endregion

//#region  Breadth first search

const bfs = (originAirport, destinationAirport) => {
    const visited = new Set();
    const queue = [originAirport];

    while(queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            if (destination === destinationAirport) {
                console.log(`${destinationAirport} found`);
            }
            if (!visited.has(destination)) {
                console.log(destination);
                queue.push(destination);
                visited.add(destination);
            }
        }
    }
};

// bfs('BLR', 'SIL');

//#endregion

//#region Depth first search

const dfs = (originAirport, destinationAirport, visited = new Set()) => {
    visited.add(originAirport);
    const destinations = adjacencyList.get(originAirport);

    for(const destination of destinations) {
        if (destination === destinationAirport) {
            console.log(`${destinationAirport} found`);
            return;
        }
        
        if (!visited.has(destination)) {
            dfs(destination, destinationAirport, visited);
        }
    }
};

// dfs('BOM', 'HYD');

//#endregion

