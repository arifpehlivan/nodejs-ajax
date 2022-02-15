function create() {
  var total = [];
  const para = document.createElement("tr");
  document.getElementById("tBody").appendChild(para);

  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      const para1 = document.createElement("td");
      para1.setAttribute("id", "td" + x + y);
      para1.setAttribute("value", "");
      document.getElementById("tBody").appendChild(para1);
    }
    const para = document.createElement("tr");
    document.getElementById("tBody").appendChild(para);
  }

  $(document).ready(function () {
    $("#tBody")
      .children("td")
      .click(function () {
        var x = this.id.substring(2, 3);
        var y = this.id.substring(3, 4);
        const para4=document.getElementById("td"+x+y);
        if(para4.innerHTML==""){
          $.post("/", {
          coorX: x,
          coorY: y,
        });
        }
        

        $.ajax({
          url: "/ajax",

          type: "GET",

          data: {
            format: "json",
          },
          success: function (data) {
            var a, b, arrNum;
            a = data.x;
            b = data.y;
            arrNum = data.arr;
            const para2 = document.getElementById("td" + a + b);
            if (para2.innerHTML == "") {
              total.push(arrNum);
            }
            para2.setAttribute("value", arrNum);
            document.getElementById("td" + a + b).innerHTML = arrNum;
            let sum = 0;
            for (let i = 0; i < total.length; i++) {
              sum += total[i];
            }
            const para3 = document.getElementById("score");
            para3.setAttribute("value", "");
            document.getElementById("score").innerHTML = sum;
          },
        });
      });
  });
}
