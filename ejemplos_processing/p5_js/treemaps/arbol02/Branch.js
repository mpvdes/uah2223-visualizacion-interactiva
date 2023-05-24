class Branch {
  constructor(position, length, diameter, angle, color, level) {
    this.position = position;
    this.length = length;
    this.diameter = diameter;
    this.angle = angle;
    this.color = color;
    this.level = level;
    this.middleBranch = this.createSubBranch(true);
    this.extremeBranch = this.createSubBranch(false);
  }
  // Decide if the branch should be created
  paint() {
    // Paint the middle branch
    if (this.middleBranch) {
      this.middleBranch.paint();
    }

    // Paint the extreme branch
    if (this.extremeBranch) {
      this.extremeBranch.paint();
    }

    // Calculate the diameter at the branch top
    var topDiameter = 0.65 * this.diameter;

    if (this.extremeBranch) {
      topDiameter = this.extremeBranch.diameter;
    }

    // Paint the branch
    push();
    fill(this.color);
    translate(this.position.x, this.position.y);
    print("this.angle:"+this.angle)
    rotate(this.angle);
    beginShape();
    vertex(0, -this.diameter / 2);
    vertex(1.04 * this.length, -topDiameter / 2);
    vertex(1.04 * this.length, topDiameter / 2);
    vertex(0, this.diameter / 2, 0);
    endShape();
    pop();
  }
  
   createSubBranch (isMiddleBranch) {
        // Decide if the branch should be created
        var createBranch = false;
        var maxLevel = 18;

        if (isMiddleBranch) {
            if (this.level < 4 && random() < 0.7) {
                createBranch = true;
            } else if (this.level >= 4 && this.level < 10 && random() < 0.8) {
                createBranch = true;
            } else if (this.level >= 10 && this.level < maxLevel && random() < 0.85) {
                createBranch = true;
            }
        } else {
            if (this.level == 1) {
                createBranch = true;
            } else if (this.level < maxLevel && random() < 0.85) {
                createBranch = true;
            }
        }

        if (createBranch) {
            // Calculate the starting position of the new branch
            var newPosition = createVector(cos(this.angle), sin(this.angle), 0);
            newPosition.mult(this.length);

            if (isMiddleBranch) {
                newPosition.mult(random(0.5, 0.9));
            }

            newPosition.add(this.position);

            // Calculate the length of the new branch
            var newLength = random(0.8, 0.9) * this.length;

            // Calculate the diameter of the new branch
            var newDiameter = this.diameter;

            if (this.level < 5) {
                newDiameter *= random(0.8, 0.9);
            } else {
                newDiameter *= random(0.65, 0.75);
            }

            // Calculate the inclination angle of the new branch
            var newAngle = this.angle;

            if (isMiddleBranch) {
                var sign = (random() < 0.5) ? -1 : 1;
                var deltaAngle = (PI / 180) * random(20, 40);
                newAngle += sign * deltaAngle;

                if (this.level < 8) {
                    // Don't let the branches fall too much
                    if (newAngle < -PI) {
                        newAngle += 2 * deltaAngle;
                    } else if (newAngle > 0) {
                        newAngle -= 2 * deltaAngle;
                    }
                }
            } else {
                newAngle += (PI / 180) * random(-15, 15);

                if (this.level < 8) {
                    // Don't let the branches fall too much
                    if (newAngle < -PI) {
                        newAngle += (PI / 180) * random(10, 30);
                    } else if (newAngle > 0) {
                        newAngle -= (PI / 180) * random(10, 30);
                    }
                }
            }

            // Calculate the color of the new branch
            var newColor;

            if (newDiameter > 1) {
                var deltaColor = round(0, 20);
                newColor = color(red(this.color) + deltaColor, green(this.color) + deltaColor, blue(this.color));
            } else {
                newColor = color(0.75 * red(this.color), green(this.color), 0.85 * blue(this.color));
            }

            // Calculate the new branch level
            var newLevel = this.level + 1;

            if (this.level < 6 && random() < 0.3) {
                newLevel++;
            }

            // Return the new branch
            return new Branch(newPosition, newLength, newDiameter, newAngle, newColor, newLevel);
        } else {
            // Return undefined
            return;
        }
    };
}
