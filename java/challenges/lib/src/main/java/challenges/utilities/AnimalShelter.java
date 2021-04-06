package challenges.utilities;

import challenges.stacksandqueues.Queue;

public class AnimalShelter {
  Queue dogQueue;
  Queue catQueue;

  public AnimalShelter(){
    dogQueue = new Queue();
    catQueue = new Queue();
  }

  public void enqueueAnimal(Object animal) throws Exception {
    if (animal == "dog"){
      dogQueue.enqueue(animal);
    } else if (animal == "cat"){
      catQueue.enqueue(animal);
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
