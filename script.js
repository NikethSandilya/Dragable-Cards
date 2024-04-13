let highestZ = 1;

class Paper{ 
    holdingPaper = false;

    preMouseX = 0;
    preMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX =0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init(paper) {

        paper.addEventListener("mousedown", (e)=>{
            this.holdingPaper = true;
            // holding paper true
            paper.style.zIndex = highestZ;
            highestZ +=1;
            //selected paper will be to due to change in its z-index value of that perticular div 
            if(e.button == 0){
                this.preMouseX = this.mouseX;
                this.preMouseY = this.mouseY;
            }
            // 0--->: left click 
            // 1--->: Middle scroll
            // 2--->: Right click
        })
        // Mouse will select the page

        document.addEventListener('mousemove',(e)=>{
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX-this.preMouseX;
            this.velocityY = this.mouseY-this.preMouseY;

            if(this.holdingPaper){
                this.currentPaperX+=this.velocityX;
                this.currentPaperY+=this.velocityY;

                this.preMouseX = this.mouseX;
                this.preMouseY = this.mouseY ;
                
                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }

        })

        window.addEventListener('mouseup',(e)=>{
            this.holdingPaper=false;
        })



    }
}

const papers = Array.from(document.querySelectorAll(".paper"))
console.log(papers)
// Multiple classes of paper will ne stored here and operated as array

for (const paper of papers) {
    let p = new Paper();
    p.init(paper);
}// This operation is required to find on which paper this operation is need to be performed by this system of user