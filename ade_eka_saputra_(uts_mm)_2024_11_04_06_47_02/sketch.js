function setup() {
    createCanvas(800, 400);
}

function draw() {
    if (mouseX < width / 2) {
        // Siang
        background(135, 206, 235); // Warna langit siang

        // Matahari
        fill(255, 204, 0);
        ellipse(350, 250, 80, 80);
     
    fill(0);
    ellipse(200, 70, 10, 10); 
    arc(200, 70, 29, 10, 0, PI, PIE);
    ellipse(150, 100, 10, 10);
    arc(150, 100, 29, 10, 0, PI, PIE);
    ellipse(300, 70, 10, 10);
    arc(300, 70, 29, 10, 0, PI, PIE);
    ellipse(400, 7, 10, 10);
    arc(400, 7, 29, 10, 0, PI, PIE);
    } else {
        // Malam
        background(25, 25, 112); // Warna langit malam

        // Bulan
        fill(255, 255, 224);
        ellipse(350, 150, 80, 80);
    }

  

    // Gunung 1
    fill(34, 139, 34);
    triangle(0, 300, 200, 100, 400, 300);

    // Gunung 2
    fill(34, 139, 34);
    triangle(300, 300, 500, 100, 800, 300);

    // Jalan menanjak
    fill(169, 169, 169);
    beginShape();
    vertex(200, height);
    vertex(300, height - 150);
    vertex(350, height - 150);
    vertex(400, height);
    endShape(CLOSE);
}
