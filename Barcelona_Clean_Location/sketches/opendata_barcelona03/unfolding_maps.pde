void setupMap() {
  // mapDetail = new UnfoldingMap(this, 0, 0, width, height, new StamenMapProvider.WaterColor());
  mapDetail = new UnfoldingMap(this, 0, 0, width, height);
  mapDetail.setTweening(true);
  mapDetail.zoomToLevel(4);
  mapDetail.zoomAndPanTo(13, new de.fhpotsdam.unfolding.geo.Location(41.38879, 2.15899));
  mapOverview = new UnfoldingMap(this, "overview", 605, 10, 185, 185);
  mapOverview.setTweening(true);

  EventDispatcher eventDispatcher = new EventDispatcher();

  // Add mouse interaction to both maps
  MouseHandler mouseHandler = new MouseHandler(this, mapDetail, mapOverview);
  eventDispatcher.addBroadcaster(mouseHandler);

  // Maps listen to each other, i.e. each interaction in one map is reflected in the other
  eventDispatcher.register(mapDetail, "pan", mapDetail.getId(), mapOverview.getId());
  eventDispatcher.register(mapDetail, "zoom", mapDetail.getId(), mapOverview.getId());
}
