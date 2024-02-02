document.getElementById('btn').addEventListener("click",mycal);
function mycal()
{
    let phy=parseInt(document.getElementById("phy").value);
    let che=parseInt(document.getElementById("che").value);
    let eng=parseInt(document.getElementById("eng").value);
    let math=parseInt(document.getElementById("math").value);
    let hindi=parseInt(document.getElementById("hnd").value);

    let total=phy+che+eng+math+hindi;
    let per=total*100/500;
    document.getElementById("total").innerHTML="Total marks: "+ total;
    document.getElementById("per").innerHTML="Percentage: "+ per+ "%";
    
}