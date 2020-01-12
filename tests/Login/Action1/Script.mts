SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
wait 5
'Login to application
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set "HP"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").highlight



