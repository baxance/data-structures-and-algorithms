package challenges.utilities;

import challenges.stacksandqueues.Queue;
import org.checkerframework.checker.units.qual.A;

public class AnimalShelter {
  Queue dogQueue;
  Queue catQueue;

  public AnimalShelter(){
    dogQueue = new Queue();
    catQueue = new Queue();
  }

  public void enqueueAnimal(Object animal) throws Exception {
    if (animal == "dog"){
      Animal dog = new Animal(animal);
      dogQueue.enqueue(dog);
    } else if (animal == "cat"){
      Animal cat = new Animal(animal);
      catQueue.enqueue(cat);
    }
    else throw new Exception("Only accepting cat and dog");
  }

  public Object dequeueAnimal(Object pref) {
    if (pref != "dog" && pref != "cat"){
      return null;
    } else
      if (pref == "dog"){
      return dogQueue.dequeue();
    } else
      return catQueue.dequeue();
  }
}
