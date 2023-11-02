import Completed from '../completed';
import '../completed.css'
import Inprogress from '../inprogress';
import '../inprogress.css'
import Todoadd from '../todoadd';
import '../todoadd.css'
import Todonav from '../todonav';
import '../todonav.css'
import Todopage from '../todopage';
import '../todopage.css'
const Todo = () => {
return(
    <>
     <Todonav/>
      <Todopage/>
      <Todoadd/>
      <Inprogress/>
      <Completed/>
      {/* <Addtask/> */}

    </>
);
};
export default Todo;