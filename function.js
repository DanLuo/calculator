function plus(){
			var n=parseInt(document.getElementById("num1").value);
			var m=parseInt(document.getElementById("num2").value);
			var x= n + m;
				document.getElementById("result").innerHTML=x;
			}
			function subtract(){
			var n=parseInt(document.getElementById("num1").value);
			var m=parseInt(document.getElementById("num2").value);
			var x= n - m;
				document.getElementById("result").innerHTML=x;
			}
			function product(){
			var n=parseInt(document.getElementById("num1").value);
			var m=parseInt(document.getElementById("num2").value);
			var x= n * m;
				document.getElementById("result").innerHTML=x;
			}
			function divide(){
			var n=parseInt(document.getElementById("num1").value);
			var m=parseInt(document.getElementById("num2").value);
			var x= (n/m).toPrecision(5);
				document.getElementById("result").innerHTML=x;
			}
			//js file
