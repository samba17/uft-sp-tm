WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Paris"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "30-10-2019"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
wait 3
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,1
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "gari"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click

wait 3
'' retrieve order number
val = WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderNumber").GetROProperty("text")
msgbox val







