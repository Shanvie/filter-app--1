function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(530,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,0,0,300,300);
    tint(tint_color);
}

function take_snapshot(){
    save('filter_applied_image.png');
}

function apply_filter(){
    tint_color=document.getElementById("color_name").value;

}
