 $("#empid").focus();
 
function fillData(jsonObj)
{
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#empname").val(record.name);
    $("#empsal").val(record.salary);
    $("#hra").val(record.hra);
    $("#da").val(record.da);
    $("#deduction").val(record.deduction);
    
}

 function resetForm()
{
    $("#empid").val("");
    $("#empname").val("");
    $("#empsal").val("");
    $("#hra").val("");
    $("#da").val("");
    $("#deduction").val("");
    $("#empid").prop("disbaled",false);
    $("#save").prop("disbaled",true);
    $("#change").prop("disbaled",true);
    $("#reset").prop("disbaled",true);
    $("#empid").focus();
}
function validateData()
{
    var empid,empname,empsal,hra,da,deduction;
    empid = $("#empid").val("");
    empname =$("#empname").val("");
    empsal =$("#empsal").val("");
    hra = $("#hra").val("");
    da = $("#da").val("");
    deduction = $("#deduction").val("");
    if(empid === " ")
    {
        alert("employee id missing");
        $("#empId").focus();
        return "";
    }
    if(empname === " ")
    {
        alert("employee name missing");
        $("#empname").focus();
        return "";
    }
    if(empsal === " ")
    {
        alert("employee sal missing");
        $("#empsal").focus();
        return "";
    }
    if(hra === " ")
    {
        alert("employee hra missing");
        $("#emphra").focus();
        return "";
    }
    if(da === " ")
    {
        alert("employee da missing");
        $("#empda").focus();
        return "";
    }
    if(deduction === " ")
    {
        alert("employee deduction missing");
        $("#empdeduction").focus();
        return "";
    }
    var jsonStrObj={
        id: empid,
        name: empname,
        salary:empsal,
        hra:hra,
        da:da,
        deduction:deduction
    };
    return JSON.stringify(jsonStrObj);

function getEmp() {
var empidjsonobj = getempidasjsonObj();
var getRequest = createGET_BY_KEYRequest("90938290|-31949273866143397|90952239",
                        empidjsonobj, "employee", "employee-REL");
jQuery.ajaxSetup({async: false});
var resJsonobj = executeCommandAtGivenBaseUrl(getRequest,
                        "http://api.login2explore.com:5577", "/api/iml");
jQuery.ajaxSetup({async: true});
if (resJsonobj.status === 400) {
$("save").prop("disabled", false);
$("#reset").prop("disabled",false);
$("#empname").focus();
} 
else if (resJsonobj.status === 200) {
$("#empid").prop("disabled", true);
fillData(resJsonobj);
$("#change").prop("disabled",false);
$("#reset').prop('disabled",false);
$("#empname").focus();
}
}
function saveRecNo2LS()
{
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno",lvData.rec_no);
}

function getEmpIdAsjsonObj()
{
   var empid = $("#empid").val("");
   var jsonStr = {
       id:empid
   };
   return JSON.stringify(jsonStr);
}
function saveData() {
                var jsonStr = validateData();
                if (jsonStr === "") {
                    return;
                }
                var putReqStr = createPUTRequest("90938290|-31949273866143397|90952239",
                        jsonStr, "employee", "employee-REL");
                alert(putReqStr);
                jQuery.ajaxSetup({async: false}); //like multithreading do false while execution.
                var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
                        "http://api.login2explore.com:5577", "/api/iml");
                alert(JSON.stringify(resultObj));
                jQuery.ajaxSetup({async: true});
               resetForm(); // used to remove details which entered on screen and move the cursor to the employyeid.
               $("#empId").focus();
            }
function changeData() 
{
               $("#change").prop("disbaled",true);
                 jsonchg = validateData();
                var updateRequest = createUPDATERecordRequest("90938290|-31949273866143397|90952239",
                        jsonchg, "Student", "Student-REL",2);
                alert(updateRequest);
                jQuery.ajaxSetup({async: false}); //like multithreading do false while execution.
                var resultObj = executeCommandAtGivenBaseUrl(updateRequest,
                        "http://api.login2explore.com:5577", "/api/iml");
                alert(JSON.stringify(resultObj));
                jQuery.ajaxSetup({async: true});
                console.log(resultObj);
               resetForm(); // used to remove details which entered on screen and move the cursor to the employyeid.
               $("#empId").focus();
            }
            }