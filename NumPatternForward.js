// Enter No.of Rows:5
// 1         
// 1 2       
// 1   3     
// 1     4   
// 1 2 3 4 5 
let rows=+prompt("Enter No.of Rows:");
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=rows;j++){
        if(j==1){
            res=res+j+" ";
        }
        else if(i==j){
            res=res+j+" ";
        }
        else if(i==rows){
            res=res+j+" ";
        }
        else{
            res=res+"  ";
        }
    }
    console.log(res);
}