import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import MasterNavbar from "./components/navbar";
import RecordList from "./recordCRUDComponents/recordList";
import RecordsEdit from "./recordCRUDComponents/edit";
import RecordsCreate from "./recordCRUDComponents/create";
import HomePage from "./components/homepage";
 
const App = () => {
 return (
   <div>
     <MasterNavbar />
     <Routes>
       <Route exact path="/" element={<HomePage />}/>
       <Route exact path="/recordlist" element={<RecordList />} />
       <Route path="/recordlist/edit/:id" element={<RecordsEdit />} />
       <Route path="/recordlist/create" element={<RecordsCreate />} />
       <Route path="/game" element={<RecordsCreate />} />
     </Routes>
   </div>
 );
};
 
export default App;
