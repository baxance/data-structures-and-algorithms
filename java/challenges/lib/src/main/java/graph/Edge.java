package graph;

public class Edge<T> {
  public T srcVertex, destVertex, weightBetweenVertex;

  public Edge(T srcVertex, T destVertex, T weightBetweenVertex) {
    this.srcVertex = srcVertex;
    this.destVertex = destVertex;
    this.weightBetweenVertex = weightBetweenVertex;
  }

  public T getSrcVertex() { return srcVertex; }
  public void setSrcVertex(T srcVertex) { this.srcVertex = srcVertex; }
  public T getDestVertex() { return destVertex; }
  public void setDestVertex(T destVertex) { this.destVertex = destVertex; }
  public T getWeightBetweenVertex() { return weightBetweenVertex; }
  public void setWeightBetweenVertex(T weightBetweenVertex) { this.weightBetweenVertex = weightBetweenVertex; }

  @Override
  public String toString(){
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append(srcVertex).append("\n");
    stringBuilder.append(destVertex).append("\n");
    stringBuilder.append(weightBetweenVertex).append("\n");
    return stringBuilder.toString();
  }
}
