package challenges.graphs;

import challenges.getEdge.GetEdge;
import graph.Edge;
import graph.Graph;
import graph.Vertex;
import static org.junit.Assert.*;
import org.junit.Assert;
import org.junit.Test;

public class GetEdgeTest {

  @Test
  public void getEdgeTest(){
    Graph graph = new Graph();
    Vertex hilo = new Vertex("Hilo");
    Vertex honolulu = new Vertex("Honolulu");
    Vertex seattle = new Vertex("Seattle");
    Vertex tokyo = new Vertex("Tokyo");
    Vertex armenia = new Vertex("Armenia");
    Vertex sanDiego = new Vertex("San Diego");
    graph.addVertex(hilo);
    graph.addVertex(honolulu);
    graph.addVertex(seattle);
    graph.addVertex(tokyo);
    graph.addVertex(armenia);
    graph.addVertex(sanDiego);
    graph.addEdge(hilo, honolulu, 100);
    graph.addEdge(honolulu, seattle, 700);
    graph.addEdge(honolulu, tokyo, 1200);
    graph.addEdge(honolulu, sanDiego, 500);
    graph.addEdge(seattle, tokyo, 1500);
    graph.addEdge(seattle, sanDiego, 300);
    graph.addEdge(seattle, armenia, 800);
    graph.addEdge(tokyo, sanDiego, 1400);
    graph.addEdge(armenia, sanDiego, 900);
    String[] cities = {"Hilo", "Honolulu", "Tokyo", "San Diego", "Armenia", "Seattle"};
    System.out.println(new GetEdge().getEdge(graph, cities));
  }
}
