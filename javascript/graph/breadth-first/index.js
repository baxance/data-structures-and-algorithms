`use strict`;


class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('ADD EDGE ERROR :: vertex error');
    }

    let neighbors = this.adjacencyList.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: invalid vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    console.log('in breadth first method');
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while(queue.length) {
      console.log('entering breadth first loop');
      const current = queue.shift();

      let neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        let neighbor = edge.vertex;
        if(!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    console.log([...visitedNodes]);
    return([...visitedNodes]);
  }

}

module.exports = { Vertex, Edge, Graph };
