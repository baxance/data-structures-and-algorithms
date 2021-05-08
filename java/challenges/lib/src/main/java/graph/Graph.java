package graph;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Graph<T> {
  public List<Vertex> vertexList = new ArrayList<>();
  public List<Edge> edgeList = new ArrayList<>();

  public Graph(List<Vertex> vertexList, List<Edge> edgeList) {
    this.vertexList = vertexList;
    this.edgeList = edgeList;
  }
  public Graph() {}
  public List<Vertex> getVertexList() { return vertexList; }
  public void setVertexList(List<Vertex> vertexList) { this.vertexList = vertexList; }
  public List<Edge> getEdgeList() { return edgeList; }
  public void setEdgeList(List<Edge> edgeList) { this.edgeList = edgeList; }

  public Vertex<T> addVertex(T input){
    Vertex vertex = new Vertex(input);
    vertexList.add(vertex);
    return vertex;
  }

//  public Edge<T> addEdge(T startVtx, T endVtx, T weight){
//
//
//    return edge;
//  }

  public void addEdge(T startVtx, T endVtx, T weight){
    Edge edge = new Edge(startVtx, endVtx, weight);
    edgeList.add(edge);

    if (!vertexList.contains(startVtx)) {
      addVertex(startVtx).setEdges(getEdgeList());
    }
    if (!vertexList.contains(endVtx)) {
      addVertex(endVtx).setEdges();
    }

    Vertex vertex = new Vertex(startVtx);
    vertex.setEdges(edgeList.get());
    edgeList.add(edge);
  }

//  public Edge<T> addEdge(T startVtx, T endVtx, T weight){
//    if (!vertexList.contains(startVtx))
//      addVertex(startVtx);
//    if (!vertexList.contains(endVtx))
//      addVertex(endVtx);
//
//    Edge edge = new Edge(startVtx, endVtx);
//
//    return edge;
//  }

}
