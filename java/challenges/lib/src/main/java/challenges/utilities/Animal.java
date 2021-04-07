package challenges.utilities;

public class Animal {
  Object type;

  public Animal(Object type){
    this.type = type;
  }

  @Override
  public String toString() {
    return (String) type;
  }

}
