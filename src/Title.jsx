
function GiveInfo(){
  return(<>
    <Title userName="shivani" textColor="green"/>
  <Title userName="shradha" textColor="green"/>
  <Title userName="Aman" textColor="green"/>
  </>
  );
}


function Title({userName,textColor}){
  let styles1 ={color:textColor};

  let options =["hi-tech","durable","fast"];
  let options2 ={a:"hightech",b:"durable"};
  let price =3000;
  let styles={color:price>300?"green":"red"};
    return (
      <>
      <h1 style={styles1}>hello ,{userName}</h1>
      <p>{options.map((feature)=>(<li>{feature}</li>))}</p>
       <p style={styles}>hello world!!</p>


      </>
    );
  }

  
   export default GiveInfo;
  