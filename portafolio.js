
let canvas;

let fondo;
let statement;
let tijerales;

let escenario;
let bc;



let d;



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }

function setup (){
canvas = createCanvas(windowWidth-20, windowHeight-1);
canvas.position(20, 0);


fondo=loadImage("data/fondo2.jpg");
statement=loadImage("data/statement.jpg");
tijerales=loadImage("data/tijerales.jpg");
bc=loadImage("data/BC.gif");


textFont("'Gaegu', cursive");


escenario=0

}

function draw(){
    fill(0);
    noStroke();
    rect (300, 0, 1220, 840);


      
     /*
      
      for(let y = 50; y<=height-40; y +=30){
    for(let x= 365; x<= width-70; x +=50){
        stroke(0);
    line(x, y, x+50, y);
    }
    }  
*/


      if(escenario == 0){
      
      
      image(tijerales, 444, 100, 400, 400);
      fill(255,0,249,100);
      rect(444, 100, 400, 400);
      if(mouseX < 844 && mouseY < 500){
        if (mouseX>444 && mouseY > 100){
            image(tijerales, 444, 100, 400, 400);
        }}


        image(bc, 1044, 100, 400, 400);
      fill(255,0,249,100);
      rect(1044, 100, 400, 400);
      if(mouseX < 1444 && mouseY < 500){
        if (mouseX>1044 && mouseY > 100){
            image(bc, 1044, 100, 400, 400);
        }}

              

      fill(255,0,0);
      textSize (42);
      text("Artes plásticas=>", 520, 620);
      if(mouseX < 820 && mouseY < 650){
        if (mouseX>500 && mouseY > 600){
            textSize (42);
            fill(255);
            text("Artes plásticas=>", 520, 620);
        }}


        fill(255,0,0);
      textSize (42);
      text("Arte digital=>", 1120, 620);
      if(mouseX < 1320 && mouseY < 650){
        if (mouseX>1100 && mouseY > 600){
            textSize (42);
            fill(255);
            text("Arte digital=>", 1120, 620);
        }}

}
      if(escenario == 1){
    
        fill(0);
      textSize (22);   
        text("Mi proceso creativo está basado en mi temprano acercamiento a la fantasía y la ciencia ficción,", 450,165);
        text("mundos que contrastaban con peculiares experiencias espaciales en diferentes geografías.", 460,195);
        text("De esta manera puedo explorar conceptos como los paisajes liminales, hibridación, utopías ", 455,225);
        text("y simulación. Esto a menudo implica también el manejo de distintas disciplinas que incluyen la", 450,255);
        text("composición sonora -lo cual añade un aspecto inmersivo a las experiencias que busco generar-,", 460,285);
        text("empujando los límites de lo que es posible con los medios que elijo y, por tanto,", 490,315);
        text("desafiándome constantemente como artista.", 480,345);

        textSize (42);
        text("<=Atrás", 820, 520);
        if(mouseX < 1020 && mouseY < 550){
          if (mouseX>800 && mouseY > 500){
              textSize (42);
              fill(255);
              text("<=Atrás", 820, 520);
          }
  
  
        }

      }




  

      /*DIST*//*

            if(mouseX < width && mouseY < height){
                if (mouseX>280 && mouseY > 0){
                   let d = dist(mouseX, 80, width/2, 0);
                   fill(355,120);
                   ellipse (mouseX, mouseY, d, d); 

            }}
*/
            

    
     
}

function mousePressed() {
    if(escenario == 0){
        frameRate(5);
        escenario = 1;
    }
    
 else if(escenario == 1){
      frameRate(5);
      escenario = 0;
  }

    
    
   
  
}