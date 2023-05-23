void mouseClicked() {
  // Simple way of displaying bike station names. Use markers for single station selection.
  for (BikeStation bikeStation : bikeStations) {
    bikeStation.showLabel = false;
    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    if (dist(pos.x, pos.y, mouseX, mouseY) < 10) {
      bikeStation.showLabel = true;
    }
  }
}
