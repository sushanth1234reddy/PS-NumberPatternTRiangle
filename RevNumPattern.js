// Enter No.of Rows:5
// 1 2 3 4 5 
// 2     5   
// 3   5     
// 4 5       
// 5  
let rows=+prompt("Enter No.of Rows:");
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=rows;j++){
       if(i+j==rows+1){
           res=res+rows+" ";
       }
       else if(i<=rows && j==1){
           res=res+i+" ";
       }
       else if(i==1){
           res=res+j+" ";
       }
       else{
           res=res+"  ";
       }
    }
    console.log(res);
}