void dropdown(int n) {
  /* request the selected item based on index n */
  // //println(n, cp5.get(ScrollableList.class, "dropdown").getItem(n).get("name"));
  String nombre = cp5.get(ScrollableList.class, "dropdown").getItem(n).get("name").toString();
  getDistricte(nombre);

  /* here an item is stored as a Map  with the following key-value pairs:
   * name, the given name of the item
   * text, the given text of the item by default the same as name
   * value, the given value of the item, can be changed by using .getItem(n).put("value", "abc"); a value here is of type Object therefore can be anything
   * color, the given color of the item, how to change, see below
   * view, a customizable view, is of type CDrawable 
   */


  // //println("item:"+ cp5.get(ScrollableList.class, "dropdown").getItem(n));
}

void setupControlP5() {

  cp5 = new ControlP5(this);
  String[] a_distritos;
  
  a_distritos = new String[al_distritos.size()];
  
 // println(" a_distritos[i];"+ al_distritos.size());
  // List l = Arrays.asList(al_distritos.size());
  for (int i = 0; i < al_distritos.size(); i ++) {
    // An ArrayList doesn't know what it is storing so we have to cast the object coming out
    Distrito o_dist = al_distritos.get(i);
    a_distritos[i] = o_dist.districte;
    
  }
  List l = java.util.Arrays.asList(a_distritos);
 // println("l:"+l);
  /* add a ScrollableList, by default it behaves like a DropdownList */
  cp5.addScrollableList("dropdown")
    .setPosition(50, 50)
    .setSize(200, 100)
    .setBarHeight(20)
    .setItemHeight(20)
    .addItems(l)
    // .setType(ScrollableList.LIST) // currently supported DROPDOWN and LIST
    ;
  cp5.addBang("reset")
    .setPosition(300, 50)
    .setSize(100, 40)
    .setTriggerEvent(Bang.RELEASE)
    .setLabel("reset")
    ;
  cp5.addBang("export")
    .setPosition(450, 50)
    .setSize(100, 40)
    .setTriggerEvent(Bang.RELEASE)
    .setLabel("export")
    ;
}
