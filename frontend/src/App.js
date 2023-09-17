import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import MasterNavbar from "./recordCRUDComponents/navbar";
import RecordList from "./recordCRUDComponents/recordList";
import Edit from "./recordCRUDComponents/edit";
import Create from "./recordCRUDComponents/create";
 
const App = () => {
 return (
   <div>
     <MasterNavbar />
     <Routes>
       <Route exact path="/" />
       <Route exact path="/recordlist" element={<RecordList />} />
       <Route path="/recordlist/edit/:id" element={<Edit />} />
       <Route path="/recordlist/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;
