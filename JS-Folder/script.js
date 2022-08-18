var x = 0;
$(document).ready(function () {
  $("#generate").click(function () {
    if (x == 1) {
      location.reload(true);
    }
    var arr_alph = ["A", "B", "C", "D", "result"];
    var variables = $("#variables").val();
    if($("#variables").val()> 4 || $("#variables").val()<2){
      Error_massage();
    }
    for (let i = 0; i <= variables; i++) {
      if (i == variables) {
        $("thead").append(
          "<th>" +
            "<input type ='text' id='vaiables_alph' value='" +
            arr_alph[arr_alph.length - 1] +
            "'></input>" +
            "</th>"
        );
      } else {
        $("thead").append(
          "<th>" +
            "<input type ='text' id='vaiables_alph' value='" +
            arr_alph[i] +
            "'></input>" +
            "</th>"
        );
      }
    }
    for (let i = 0; i < Math.pow(2, variables); i++) {
      $("tbody").append("<tr>" + "</tr>");
    }

    for (let i = 0; i <= variables; i++) {
      $("tr").append(
        "<td>" +
          "<input type = 'number' min='0' max='1' id='input_data' >" +
          "</td>"
      );
    }

    $(".table").append(
      "<button onclick='ReadData()' id='read'>Read the function for the above table</button>"
    );
    x = 1;
  });
});

var data_values = [];
var result_values = [];
var input_result_values = [];
var result_output_values = [];
var result_output;


function ReadData() {
   $("input").prop("disabled", true);
   $("#read").prop("disabled", true);
  //reload
  $("#reload").prop("disabled", false);
  var variables = $("#variables").val();
  $("tr #input_data").each(function () {
    data_values.push($(this).val());
  });
  
  for(let i = 0; i< data_values.length; i++){
    if(data_values[i] > 1 || data_values[i]<0){
      Error_massage_input();
      return
    }
    if(data_values[i] ==""){
      Error_massage_input();
      return
    }
  }
  
  progessData(variables);
  
}

function progessData(variables) {

  
  let result_pos = [];

  if (variables == 2) {
    let i = 2;
    while (i <= 11) {
      result_pos.push(i);
      i = i + 3;
    }
  }
  if (variables == 3) {
    let i = 3;
    while (i <= 35) {
      result_pos.push(i);
      i = i + 4;
    }
  }
  if (variables == 4) {
    let i = 4;
    while (i <= 79) {
      result_pos.push(i);
      i = i + 5;
    }
  }
  for (let i = 0; i <= data_values.length; i++) 
  { 
    if (result_pos.includes(i)) {
      if (data_values[i] == 0) {
        result_values.push(data_values[i]);
        for (let J = 1; J <= variables; J++) {
          input_result_values.push(data_values[i - J]);
        }
      }
    }
  }
  WriteData(variables);
}

function WriteData(variables) {
  //console.log(input_result_values);

  if (variables == 2) {
    for (let i = 0; i <= input_result_values.length; i = i + 2) {
      if (input_result_values[i] == 1) {
        result_output_values.push("(¬ B ∨ ");
      }
      if (input_result_values[i] == 0) {
        result_output_values.push("( B ∨");
      }
      if (input_result_values[i + 1] == 1) {
        result_output_values.push(" ¬ A )");
      }
      if (input_result_values[i + 1] == 0) {
        result_output_values.push(" A )");
      }
    }
    result_output = result_output_values.toString();
    txt = result_output_values.toString().replaceAll("),(", " ) ∧ ( ");
    code = txt.replaceAll(",", " ");
    $("#statement").append(code);  
    addCode(code , variables)
  }

  if (variables == 3) {
    for (let i = 0; i <= input_result_values.length; i = i + 3) {
      if (input_result_values[i] == 1) {
        result_output_values.push("(¬ C ∨ ");
      }
      if (input_result_values[i] == 0) {
        result_output_values.push("( C ∨");
      }

      if (input_result_values[i + 1] == 1) {
        result_output_values.push(" ¬ B ∨");
      }
      if (input_result_values[i + 1] == 0) {
        result_output_values.push(" B ∨");
      }

      if (input_result_values[i + 2] == 1) {
        result_output_values.push(" ¬ A )");
      }
      if (input_result_values[i + 2] == 0) {
        result_output_values.push(" A )");
      }
    }
    result_output = result_output_values.toString();
    txt = result_output_values.toString().replaceAll("),(", " ) ∧ ( ");
    code = txt.replaceAll(",", " ");
    $("#statement").append(code);  
    addCode(code , variables)
  }

  if (variables == 4) {
    for (let i = 0; i <= input_result_values.length; i = i + 4) {
      if (input_result_values[i] == 1) {
        result_output_values.push("(¬ D ∨ ");
      }
      if (input_result_values[i] == 0) {
        result_output_values.push("( D ∨");
      }

      if (input_result_values[i + 1] == 1) {
        result_output_values.push(" ¬ C ∨");
      }
      if (input_result_values[i + 1] == 0) {
        result_output_values.push(" C ∨");
      }

      if (input_result_values[i + 2] == 1) {
        result_output_values.push(" ¬ B ∨");
      }
      if (input_result_values[i + 2] == 0) {
        result_output_values.push(" B ∨");
      }

      if (input_result_values[i + 3] == 1) {
        result_output_values.push(" ¬ A )");
      }
      if (input_result_values[i + 3] == 0) {
        result_output_values.push(" A )");
      }
    }
    result_output = result_output_values.toString();
    txt = result_output_values.toString().replaceAll("),(", " ) ∧ ( ");
    code = txt.replaceAll(",", " ");
    $("#statement").append(code);  
    addCode(code , variables)
  }

}

function addCode(code, variables){
  
    code = code.replaceAll("∧", "and");
    code = code.replaceAll("¬", "not");
    code = code.replaceAll("∨", "or");

    if(variables ==2){
      $(".code").append(
        "<span style='color: blue;'>" + "def f(A,B): "+ "</span>"+
          "<span style='margin-left: 20px; '> if("+
          "<b style='color: green;'> "+ code +"</b>"
           + "):</span>"+ 
          "<span style='margin-left: 60px; color:blue' '> print ( 1 ) </span>" +
          "<span style='margin-left: 20px;  '> else: </span>"+
          "<span style='margin-left: 60px; color:blue'> print ( 0 ) </span>" 
        );
    }
    if(variables ==3){
      $(".code").append(
        "<span style='color: blue;'>" + "def f(A,B,C): "+ "</span>"+
          "<span style='margin-left: 20px; '> if("+
          "<b style='color: green;'> "+ code +"</b>"
           + "):</span>"+ 
           "<span style='margin-left: 60px; color:blue' '> print ( 1 ) </span>" +
           "<span style='margin-left: 20px;  '> else: </span>"+
           "<span style='margin-left: 60px; color:blue'> print ( 0 ) </span>" 
        );
    }

    if(variables ==4){
      $(".code").append(
        "<span style='color: blue;'>" + "def f(A,B,C,D): "+ "</span>"+
          "<span style='margin-left: 20px; '> if("+
          "<b style='color: green;'> "+ code +"</b>"
           + "):</span>"+ 
           "<span style='margin-left: 60px; color:blue' '> print ( 1 ) </span>" +
           "<span style='margin-left: 20px;  '> else: </span>"+
           "<span style='margin-left: 60px; color:blue'> print ( 0 ) </span>" 
        );
    } 
}

function impressum(){
  Swal.fire({
    title: "<h1 id='titel'>Impressum</h1>", 
    html: "<div class='impressum'><h3>Truth Table Reader</h3><p id='gray-color'>Angaben gemäß § 5 TMG </p><p>Anschrift: <b>Mohamad Naser Alnakeshbandi</b></p><p> Yorkstraße 13   <br> 75177 Pforzheim <br> </p><p>Telefon: +49 15164657673 </br>E-Mail: <a href='mailto:mhmdn1381@gmail.com'>mhmdn1381@gmail.com</a></p></div>",  
    confirmButtonText: "close", 
  });
}

 function Error_massage(){
    
    Swal.fire({
      icon: 'error',
      title: 'invalid input',
      text: 'Allowed number of variables is between 2 and 4',
    });
    
}
function Error_massage_input(){

  Swal.fire({
    icon: 'error',
    title: 'invalid input',
    text: 'you used a wrong input value',
  });

}

function reload_page() {
  location.reload(true);
}

