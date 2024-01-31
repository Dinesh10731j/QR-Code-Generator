const inputBar = document.querySelector("#input-bar");
const QRImage = document.querySelector("#QR-Image");
const generateBtn = document.querySelector("#generate-btn");


const generateQR =  () =>{
  
  const Value = inputBar.value;

  if(Value.length > 0){

    try{
    const Url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Value}`;

    QRImage.src = Url;

    }catch(err){
      console.error(`Errro `,err);

    }
  }else{
    alert("Write Something...")
  }

  

}


generateBtn.addEventListener("click",()=>{

  
  generateQR();  //calling the function generateQR when user clicks the button

inputBar.value = " ";   //empty the value of input field when the user clicks the button


});
