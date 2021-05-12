package challenges.getEdge;

import graph.Edge;
import graph.Graph;
import graph.Vertex;

import java.util.ArrayList;

public class GetEdge {

  int cost = 0;
  int cityCounter = 0;
  int vtxCounter = 0;

  public <T> String getEdge(Graph<T> graph, String[] cities){
    String city = cities[cityCounter];
    Vertex vertex = graph.vertexList.get(vtxCounter);

    getVertex(vertex, city);
    return "something $" + cost;
  }

  public void getVertex(Vertex vertex, String city){
    if (vertex.value.toString().equals(city)){
      vertex.getEdges().
    }

  }

  public <T> String getEdge1(Graph<T> graph, String[] cities){
    int cost = 0;
    for (int i = 0; i < cities.length; i ++){
      for (Edge edge : graph.edgeList){
        if (edge.destVertex.toString().equals(cities[i+1])){
          cost += (int) edge.weightBetweenVertex;
        }
        if (!edge.destVertex.toString().equals(cities[i])) {
          break;
        }
        }
      }
    return "something $" + cost;
    }

  public <T> String getEdge2(Graph<T> graph, String[] cities){
    int cost = 0;
    for (int i = 0; i < cities.length; i ++){ // iterate through the cities
      for (Vertex vertex : graph.vertexList){ // on each city iterate through VTX
        if (vertex.value == cities[i]){ // find city's corresponding VTX
          if (vertex.edges.contains(cities[i+1])){
            cost += vertex.edges.
          }


        }
      }
    }
    return "something $" + cost;
  }



}
