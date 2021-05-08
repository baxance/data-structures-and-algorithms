package graph;

import java.util.List;

public class Vertex<T> {
  public T value;
  public List<Edge> edges;

  public Vertex(T value){
    this.value = value;
    this.edges = null;
  }

  public T getValue() {return value;}
  public void setValue(T value) {this.value = value;}
  public List<Edge> getEdges() {return edges;}
  public void setEdges(List<Edge> edges) {this.edges = edges;}

  @Override
  public String toString(){
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append("Vertex value: ").append(this.value).append("\n");
    stringBuilder.append("vertex edges: ").append(this.edges).append("\n");
    return stringBuilder.toString();
  }

  public void setEdges() {
  }
}
