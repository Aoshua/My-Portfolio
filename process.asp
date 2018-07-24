<%@ Language="VBscript" %>
<html>
<head>
<title>Submitted data</title>
</head>

<body>
<%
'variables: 
Dim fName, lName, message

'receive the values sent from the form and assign them to variables
'note that request.form("name") will receive the value entered 
'into the textfield called name
fName=Request.Form("fName")
lName=Request.Form("lName")
message=Request.Form("message")

'let's now print out the received values in the browser
Response.Write("Name: " & name & "<br>")
Response.Write("E-mail: " & email & "<br>")
Response.Write("Comments: " & comment & "<br>")
%> 
</body>
</html>