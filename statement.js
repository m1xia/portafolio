
let canvas;

let fondo;
let statement;
let statement1;
let statement2;
let s;

let escenario;



let d;



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }

function setup (){
canvas = createCanvas(windowWidth-20, windowHeight-1);
canvas.position(20, 0);


fondo=loadImage("data/fondo2.jpg");
statement=loadImage("data/statement.jpg");
statement1=loadImage("data/statement1.png");
statement2=loadImage("data/statement2.png");
s=loadImage("data/s.jpg");



textFont("'Gaegu', cursive");


escenario=0

}

function draw(){
image(statement, 300, -80, 1220, 840);  
      
      
      fill(245, 245, 219,150);
      rect(350, 20, 1130, height-40,40);
      fill(255,160);
      //rect(350, 20, 1130, 720,40);
    
      //image(statement, 500, 40, 400, 300);
      
      
      for(let y = 50; y<=height-40; y +=30){
    for(let x= 365; x<= width-70; x +=50){
        stroke(0);
    line(x, y, x+50, y);
    }
    }  



      if(escenario == 0){
      

      fill(0);
      textSize (22);    
      text("A través de composiciones híbridas entre naturaleza y tecnología busco crear ", 380,105);
      text("diálogos que desdibujen los límites entre lo natural y lo artificial; lo ", 398,135);
      text("orgánico y lo mecánico. Me atrae la posibilidad de explorar nuevas dimensiones", 385,165);
      text("de la realidad mediante la combinación de materiales aparentemente dispares.", 385,195);
      text("Lo que busco en mis investigaciones es resaltar la liminalidad entre lo que", 380,225);
      text("conocemos y las nuevas posibilidades sobre ello.", 395,255);

      text("Mis piezas se crean utilizando una variedad de materiales, incluidos objetos", 735,345);
      text("encontrados, materiales reciclados y componentes electrónicos. Al jugar con", 735,375);
      text("los límites de nuestra interacción con lo 'real', requiero crear un espacio-tiempo", 720,405);
      text("arquitectónicamente digital que espero pueda inspirar a los espectadores a", 740,435);
      text("contemplar su propia relación con el mundo que los rodea a -especialmente en ", 735,465);
      text("nuestro tiempo contemporáneo- donde más que nunca creo que el arte debe ser", 725,495);
      text("estimulante y atractivo.", 745,525);

      image(statement1,400,360, 300,300);
      image(statement2,1140,100, 250,200);



      textSize (42);
      text("Siguiente=>", 820, 620);
      if(mouseX < 1020 && mouseY < 650){
        if (mouseX>800 && mouseY > 600){
            textSize (42);
            fill(255);
            text("Siguiente=>", 820, 620);
        }


      }
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
        image(s,1140,400, 250,200);


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