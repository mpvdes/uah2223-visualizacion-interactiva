void dropdown(int n) {
  /* request the selected item based on index n */
 // println(n, cp5.get(ScrollableList.class, "dropdown").getItem(n).get("name"));
  String nombre = cp5.get(ScrollableList.class, "dropdown").getItem(n).get("name").toString();
getDistricte(nombre);

  /* here an item is stored as a Map  with the following key-value pairs:
   * name, the given name of the item
   * text, the given text of the item by default the same as name
   * value, the given value of the item, can be changed by using .getItem(n).put("value", "abc"); a value here is of type Object therefore can be anything
   * color, the given color of the item, how to change, see below
   * view, a customizable view, is of type CDrawable 
   */
  
  
 // println("item:"+ cp5.get(ScrollableList.class, "dropdown").getItem(n));
  
}
