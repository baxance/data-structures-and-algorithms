package graph;

import java.util.ArrayList;
import java.util.List;

public class Vertex<T> {
  public T value;
  public List<Edge> edges = new ArrayList<>();

  public Vertex(T value){
    this.value = value;
//    this.edges = null;
  }

  public T getValue() {return value;}
  public void setValue(T value) {this.value = value;}
  public List<Edge> getEdges() {return edges;}
  public void addVertexEdge(Edge<T> edge) {
     this.edges.add(edge);
  }
//  public void setEdges(Edge edges) {this.edges = edges;}

  @Override
  public String toString(){
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append(value).append("\n");
//    for (Edge edge : edges) {
//      stringBuilder.append("vertex edges: ").append(edge).append("\n"); //creates stack overflow}
//    }
    return stringBuilder.toString();
  }



  public void setEdges(){}

}
