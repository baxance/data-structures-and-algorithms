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
//    System.out.println(graph.getVertexList().toString());
//    System.out.println(graph.getEdgeList().toString());
//    System.out.println(graph.getVertexList().get(0).toString());
//    System.out.println(graph.getVertexList());
  }

  @Test
  public void getNeighborsTest(){
    Graph graph = new Graph();
    Vertex vtx1 = new Vertex("vertex 1");
    Vertex vtx2 = new Vertex("vertex 2");
    Vertex vtx3 = new Vertex("vertex 3");
    Vertex vtx4 = new Vertex("vertex 4");
    graph.addVertex(vtx1);
    graph.addVertex(vtx2);
    graph.addVertex(vtx3);
    graph.addVertex(vtx4);
    graph.addEdge(vtx1, vtx2, 3);
    graph.addEdge(vtx1, vtx3, 4);
    graph.addEdge(vtx1, vtx4, 5);
//    System.out.println(graph.Size());
//    System.out.println(graph.GetNeighbors(vtx1));
    System.out.println(graph.breadthFirst(vtx1));
    System.out.println(graph.breadthFirst(vtx1).size());
  }

}
