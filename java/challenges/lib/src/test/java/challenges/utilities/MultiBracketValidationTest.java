package challenges.utilities;

import org.junit.Test;
import static org.junit.Assert.*;

public class MultiBracketValidationTest {

  @Test
  public void bracketTest(){
    assertTrue("balanced brackets",
      MultiBracketValidation.multiBracketValidation("(word)"));
///////////////////////
    assertTrue("balanced brackets",
      MultiBracketValidation.multiBracketValidation("[{()}]"));
////////////////////////
    assertFalse("unbalanced brackets",
      MultiBracketValidation.multiBracketValidation("{thing]"));
//////////////////////////
    assertFalse("unbalanced brackets",
      MultiBracketValidation.multiBracketValidation("{[}]"));
  }

}
