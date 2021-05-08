package challenges.graphs;

import graph.Edge;
import graph.Graph;
import graph.Vertex;
import static org.junit.Assert.*;
import org.junit.Assert;
import org.junit.Test;

import java.sql.SQLOutput;

public class GraphTest {

  @Test
  public void addVertexTest() {
    Graph graph = new Graph();
    Vertex vertex = new Vertex("string");
    graph.addVertex(vertex);
    System.out.println(graph.getVertexList().get(0).toString());
    System.out.println(graph.getVertexList().size());
    Assert.assertNotNull(graph.getVertexList());
  }
    ////ADD 2
    @Test
    public void addVertexTest2(){
    Graph graph1 = new Graph();
    Vertex vertex1 = new Vertex(1);
    Vertex vertex2 = new Vertex(2);
    graph1.addVertex(vertex1);
    graph1.addVertex(vertex2);
    System.out.println(graph1.getVertexList().get(0).toString());
    System.out.println(graph1.getVertexList().size());
    int expected = 2;
    int actual = graph1.getVertexList().size();
    assertEquals("insert 2 vertexes size should be 2", expected, actual);
  }

  @Test
  public void addEdgeTest(){
    Graph graph = new Graph();
    Vertex start = new Vertex("START TEST");
    Vertex end = new Vertex("END TEST");
    graph.addVertex(start);
    graph.addVertex(end);
    graph.addEdge(start, end, "5");
//    System.out.println(graph.getEdgeList().size());
//    System.out.println(graph.getEdgeList().get(0).toString());
    System.out.println(graph.getVertexList().toString());
  }
}
