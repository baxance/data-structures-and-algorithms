package challenges.utilities;


import java.util.Stack;

public class MultiBracketValidation {

  public static boolean multiBracketValidation(String input) {
    Stack<Character> bracketStack = new Stack<>();

    for (int i = 0; i < input.length(); i++) {
      char x = input.charAt(i);
      if (x == '{' || x == '[' || x == '(') {
        bracketStack.push(x);
      }
      if (x == '}' || x == ']' || x == ')') {
        char top = bracketStack.pop();
        switch (x) {
          case '}':
            if (top == '(' || top == '[') {
              return false;
            }
            break;
          case ']':
            if (top == '(' || top == '{') {
              return false;
            }
            break;
          case ')':
            if (top == '[' || top == '{') {
              return false;
            }
            break;
        }
      }
    }
    System.out.println(bracketStack);
    return bracketStack.isEmpty();
  }
}
