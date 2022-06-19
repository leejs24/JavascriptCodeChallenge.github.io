function backgr(){
    const backimg = ["1.jpg","2.jpg","3.jpg"]
    const randimg =Math.floor(Math.random() * backimg.length);
    document.body.background = backimg[randimg];
};


//randomBackground

