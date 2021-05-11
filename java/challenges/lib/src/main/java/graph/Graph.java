package graph;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class Graph<T> {
  public List<Vertex<T>> vertexList = new ArrayList<>();
  public List<Edge> edgeList = new ArrayList<>();

  public Graph(List<Vertex<T>> vertexList, List<Edge> edgeList) {
    this.vertexList = vertexList;
    this.edgeList = edgeList;
  }
  public Graph(){}

  public List<Vertex<T>> getVertexList() { return vertexList; }
  public void setVertexList(List<Vertex<T>> vertexList) { this.vertexList = vertexList; }
  public List<Edge> getEdgeList() { return edgeList; }
  public void setEdgeList(List<Edge> edgeList) { this.edgeList = edgeList; }

  public Vertex<T> addVertex(T input){
    Vertex vertex = new Vertex(input);
    vertexList.add(vertex);
    return vertex;
  }

  public void addEdge(Vertex<T> startVtx, Vertex<T> endVtx, T weight){
    Edge edge = new Edge(startVtx, endVtx, weight);
    edgeList.add(edge);
    Edge edge2 = new Edge(endVtx, startVtx, weight);
    edgeList.add(edge2);
    if (!vertexList.contains(startVtx)) {
      startVtx.addVertexEdge(edge);
    }
    if (!vertexList.contains(endVtx)) {
      endVtx.addVertexEdge(edge2);
    }
  }

  public List<Vertex<T>> GetVertexes(){
    System.out.println(vertexList);
    return vertexList;
  }

  public List<Edge> GetNeighbors(Vertex<T> inputVtx){
    List<Edge> neighbors = new ArrayList<>();
    for (Edge edge : edgeList){
      if (edge.srcVertex == inputVtx || edge.destVertex == inputVtx){
        neighbors.add(edge);
      }
    }
    return neighbors;
  }

  public int Size(){
    return vertexList.size();
  }

  public List<Object> breadthFirst(Vertex start){
    List<Object> breadthList = new ArrayList<>();

//    for (Vertex vertex : vertexList){
//      breadthList.add(vertex);
      for (Edge edge : edgeList){
        if (edge.destVertex != null) {
          breadthList.add(edge.destVertex);
        }
      }
//    }
    return breadthList;
  }

}
