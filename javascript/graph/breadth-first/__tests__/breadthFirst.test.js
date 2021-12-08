`use strict`;

const { Vertex, Graph} = require('../index.js');

describe('Graph', () => {
  test('Graph should contain all verteces', () => {
    let testGraph = new Graph();

    let A = new Vertex('A');
    let B = new Vertex('B');
    let C = new Vertex('C');
    let D = new Vertex('D');


    testGraph.addVertex(A);
    testGraph.addVertex(B);
    testGraph.addVertex(C);
    testGraph.addVertex(D);

    testGraph.addDirectedEdge(A, C);
    testGraph.addDirectedEdge(A, B);
    testGraph.addDirectedEdge(A, D);
    testGraph.addDirectedEdge(B, C);
    testGraph.addDirectedEdge(D, C);


    expect(testGraph.breadthFirst(A)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: 'A'
        }),
        expect.objectContaining({
          value: 'B'
        }),
        expect.objectContaining({
          value: 'C'
        }),
        expect.objectContaining({
          value: 'D'
        })
      ]));
  });

  test('Traverses Graph, Set should not contain Vertex H', () => {
    let testGraph = new Graph();

    let A = new Vertex('A');
    let B = new Vertex('B');
    let C = new Vertex('C');
    let D = new Vertex('D');
    let E = new Vertex('E');
    let F = new Vertex('F');
    let G = new Vertex('G');
    let H = new Vertex('H');


    testGraph.addVertex(A);
    testGraph.addVertex(B);
    testGraph.addVertex(C);
    testGraph.addVertex(D);
    testGraph.addVertex(E);
    testGraph.addVertex(F);
    testGraph.addVertex(G);
    testGraph.addVertex(H);

    testGraph.addDirectedEdge(A, B);
    testGraph.addDirectedEdge(A, C);
    testGraph.addDirectedEdge(A, D);
    testGraph.addDirectedEdge(A, E);
    testGraph.addDirectedEdge(C, F);
    testGraph.addDirectedEdge(F, G);
    testGraph.addDirectedEdge(G, D);
    testGraph.addDirectedEdge(B, D);

    expect(testGraph.breadthFirst(A)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: 'A'
        }),
        expect.objectContaining({
          value: 'B'
        }),
        expect.objectContaining({
          value: 'C'
        }),
        expect.objectContaining({
          value: 'D'
        })
      ]));
    expect(testGraph.breadthFirst(A)).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: 'H'
        })
      ]));
  });

  test('Graph should contain all verteces and not get stuck on cyclical verteces', () => {
    let testGraph = new Graph();

    let A = new Vertex('A');
    let B = new Vertex('B');
    let C = new Vertex('C');
    let D = new Vertex('D');


    testGraph.addVertex(A);
    testGraph.addVertex(B);
    testGraph.addVertex(C);
    testGraph.addVertex(D);

    testGraph.addDirectedEdge(A, C);
    testGraph.addDirectedEdge(C, A);
    testGraph.addDirectedEdge(A, B);
    testGraph.addDirectedEdge(A, D);
    testGraph.addDirectedEdge(B, C);
    testGraph.addDirectedEdge(D, C);
    testGraph.addDirectedEdge(C, A);
    testGraph.addDirectedEdge(A, C);


    expect(testGraph.breadthFirst(A)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: 'A'
        }),
        expect.objectContaining({
          value: 'B'
        }),
        expect.objectContaining({
          value: 'C'
        }),
        expect.objectContaining({
          value: 'D'
        })
      ]));
  });

});

