import React, { useState } from 'react';
import Start from './Quiz Section/Start';
import Quiz from './Quiz Section/Quiz';
const Cat1 = () => {
    const [start, setStart] = useState(false);

  return(
      <>
   
      <div className="heading">
      Quiz
      </div>
      
      <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />}
      {/* <Quiz/>
<Start/> */}
    </div>
 

      </>
  );
};

export default Cat1;
